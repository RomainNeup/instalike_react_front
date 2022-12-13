interface Conversation {
  id: string;
  lastMessage?: Message | null;
  unreadMessages?: boolean;
  users: User[];
  messages?: Message[];
  user: User;
}
