interface MessageProps {
  id: string;
  text: string;
  user: User;
  className?: string;
}

interface ChatListProps {
  className?: string;
}

interface ChatBoxProps {
  user: User;
  messages: Message[];
}

interface AddConversationProps {
  open: boolean;
  close: () => void;
  className?: string;
}