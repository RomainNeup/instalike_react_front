interface Message {
  id: string;
  user: User;
  conversation: string;
  text: string;
  readBy: User[];
}
