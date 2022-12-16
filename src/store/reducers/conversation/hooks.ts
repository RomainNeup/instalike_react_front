import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../../hooks';
import AuthService from '../../../api/auth/service';
import ConversationService from '../../../api/conversation/service';
import {
  addConversation,
  addMessage,
  deleteMessage,
  editMessage,
  setConversation,
} from './reducer';
import MessageService from '../../../api/message/service';
import useErrors from '../error/hooks';
import useUser from '../user/hooks';

export function useConversations() {
  const conversations = useAppSelector((state) => state.conversation);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<ErrorType | null>(null);
  const { addError } = useErrors();

  const createConversation = (userId: string) => {
    ConversationService.createConversation(userId)
      .then((res) => dispatch(addConversation(res)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  useEffect(() => {
    ConversationService.getConversations()
      .then((res) => dispatch(setConversation(res)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          setError(err.response.data.error);
        }
      });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      addError(error);
      setError(null);
    }
  }, [error, addError]);

  return {
    createConversation,
    conversations,
    loading,
  };
}

export function useMessage(id: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { addError } = useErrors();

  const remove = () => {
    MessageService.deleteMessage(id)
      .then(() => dispatch(deleteMessage(id)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const edit = (text: string) => {
    MessageService.editMessage(id, text)
      .then((res) => dispatch(editMessage(res)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  return {
    deleteMessage: remove,
    editMessage: edit,
    loading,
  };
}

export function useConversation(conversationId?: string): {
  postMessage: (text: string) => Promise<void>,
  messages?: Message[],
  user?: User,
} {
  const [token, setToken] = useState('');
  const [error, setError] = useState<ErrorType | null>(null);
  const conversation = useAppSelector((state) => state.conversation
    .find((c) => c.id === conversationId));
  const dispatch = useAppDispatch();
  const { currentUser } = useUser();
  const { addError } = useErrors();

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
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  useEffect(() => {
    AuthService.getSocketToken()
      .then((t) => setToken(t))
      .catch((err: AxiosError<ErrorResponse>) => {
        if (err.response) {
          setError(err.response.data.error);
        }
      });
  }, []);

  useEffect(() => {
    if (conversationId) {
      ConversationService.getConversation(conversationId)
        .then((res) => {
          const newConv: Conversation = {
            ...res,
            messages: res.messages?.map((m) => ({
              ...m,
              user: {
                ...m.user,
                currentUser: currentUser?.id === m.user.id,
              },
            })),
            unreadMessages: false,
          };
          dispatch(addConversation(newConv));
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          if (err.response) {
            setError(err.response.data.error);
          }
        });
    }
  }, [conversationId, dispatch, currentUser]);

  useEffect(() => {
    if (!token) return () => { };
    const socket = io(process.env.REACT_APP_SOCKET_URL, {
      auth: {
        token,
      },
      transports: ['websocket'],
    });

    socket.on('message', (data: string) => {
      const event = JSON.parse(data);
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
          setError({ code: 'UNKNOWN_EVENT' });
          break;
      }
    });

    socket.on('connect_error', () => {
      setError({ code: 'ERROR' });
    });

    socket.on('connect_failed', () => {
      setError({ code: 'ERROR' });
    });

    return () => {
      socket.disconnect();
    };
  }, [conversationId, token, dispatch]);

  useEffect(() => {
    if (error) {
      addError(error);
      setError(null);
    }
  }, [error, addError]);

  return { postMessage, messages: conversation?.messages, user: conversation?.user };
}
