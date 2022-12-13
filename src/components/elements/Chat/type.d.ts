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
}

interface UserSearchSelect extends SearchUser {
  selected?: boolean;
}
