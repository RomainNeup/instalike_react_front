interface Conversation {
  id: string;
  lastMessage?: Message | null;
  unreadMessages?: boolean;
  creator: User;
  messages?: Message[];
  user: User;
}
