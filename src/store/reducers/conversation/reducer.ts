import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Conversation[] = [];

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setConversation(state, action: PayloadAction<Conversation[]>) {
      action.payload.forEach((c) => {
        const foundConversation = state.find((con) => con.id === c.id);
        if (!foundConversation) {
          state.push(c);
        }
      });
    },
    addConversation(state, action: PayloadAction<Conversation>) {
      const foundConversation = state.find((c) => c.id === action.payload.id);
      if (!foundConversation) {
        state.push(action.payload);
      } else {
        foundConversation.messages = action.payload.messages;
        foundConversation.unreadMessages = action.payload.unreadMessages;
      }
    },
    addMessage(state, action: PayloadAction<Message>) {
      const conversation = state.find((c) => c.id === action.payload.conversation);
      if (conversation) {
        if (!conversation.messages) {
          conversation.messages = [];
        }
        conversation.messages.push(action.payload);
        conversation.lastMessage = action.payload;
        conversation.unreadMessages = !action.payload.user.currentUser;
      }
    },
    deleteMessage(state, action: PayloadAction<string>) {
      const conversation = state.find((c) => c.messages?.find((m) => m.id === action.payload));
      if (conversation) {
        conversation.messages = conversation.messages?.filter((m) => m.id !== action.payload);
        conversation.lastMessage = conversation.messages?.[conversation.messages.length - 1];
      }
    },
    editMessage(state, action: PayloadAction<Message>) {
      const conversation = state.find((c) => c.messages?.find((m) => m.id === action.payload.id));
      if (conversation) {
        const message = conversation.messages?.find((m) => m.id === action.payload.id);
        if (message) {
          message.text = action.payload.text;
        }
        conversation.lastMessage = conversation.messages?.[conversation.messages.length - 1];
      }
    },
  },
});

export const {
  setConversation,
  addConversation,
  addMessage,
  editMessage,
  deleteMessage,
} = conversationSlice.actions;

export default conversationSlice.reducer;
