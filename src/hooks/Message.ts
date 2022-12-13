import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import AuthService from '../api/auth/service';
import ConversationService from '../api/conversation/service';
import {
  addConversation,
  addMessage,
  deleteMessage,
  editMessage,
} from '../store/reducers/conversation/reducer';
import MessageService from '../api/message/service';

export default function useConversationMessages(conversationId?: string): [
  (text: string) => Promise<void>,
  Message[]?,
  User?,
] {
  const [token, setToken] = useState('');
  const conversation = useAppSelector((state) => state.conversation
    .find((c) => c.id === conversationId));
  const dispatch = useAppDispatch();
  const { informations } = useAppSelector((state) => state.user);

  const postMessage = (text: string) => {
    if (!conversationId) return Promise.reject();
    return MessageService.sendMessage(conversationId, text)
      .then((res) => {
        dispatch(addMessage({
          ...res,
          user: {
            ...res.user,
            currentUser: true,
          },
        }));
      });
  };

  useEffect(() => {
    AuthService.getSocketToken().then((t) => setToken(t));
  }, []);

  useEffect(() => {
    if (conversationId) {
      ConversationService.getConversation(conversationId).then((res) => {
        const newConv: Conversation = {
          ...res,
          messages: res.messages?.map((m) => ({
            ...m,
            user: {
              ...m.user,
              currentUser: informations?.id === m.user.id,
            },
          })),
          unreadMessages: false,
        };
        dispatch(addConversation(newConv));
      });
    }
  }, [conversationId, dispatch]);

  useEffect(() => {
    if (!token) return () => { };
    const socket = io('ws://localhost:3001', {
      auth: {
        token,
      },
      transports: ['websocket'],
    });

    socket.on('message', (data: string) => {
      const event = JSON.parse(data);
      console.log(event);
      switch (event.type) {
        case 'NEW_MESSAGE':
          dispatch(addMessage({
            ...event.data.message,
            user: { ...event.data.message.user, currentUser: false },
          }));
          break;
        case 'NEW_CONVERSATION':
          dispatch(addConversation(event.data.conversation));
          break;
        case 'EDIT_MESSAGE':
          dispatch(editMessage(event.data.message));
          break;
        case 'DELETE_MESSAGE':
          dispatch(deleteMessage(event.data.message.id));
          break;
        default:
          break;
      }
    });

    socket.on('connect', () => {
      console.log('connected');
    });
    return () => {
      socket.disconnect();
    };
  }, [conversationId, token, dispatch]);

  return [postMessage, conversation?.messages, conversation?.user];
}
