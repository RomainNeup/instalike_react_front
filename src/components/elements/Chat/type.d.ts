interface MessageProps {
  id: string;
  text: string;
  user: User;
  className?: string;
  createdAt: string;
}

interface ChatListProps {
  className?: string;
  currentConversation?: string;
  conversations: Conversation[];
}

interface ChatBoxProps {
  user: User;
  messages: Message[];
  postMessage: (text: string) => Promise<void>;
}

interface AddConversationProps {
  open: boolean;
  close: () => void;
  className?: string;
  createConversation: (userId: string) => Promise<Conversation | null>;
}

interface UserSearchSelect extends SearchUser {
  selected?: boolean;
}
