interface Message {
    user: User;
    conversation: string;
    text: string;
    readBy: User[];
}