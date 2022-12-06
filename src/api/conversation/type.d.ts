interface Conversation {
    lastMessage: string | null;
    unreadMessages: boolean;
    users: User[];
}