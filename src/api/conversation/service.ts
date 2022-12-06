import API from "../api";

export default class ConversationService {

    public static createConversation(user: string): Promise<Conversation> {
        return API.post<Conversation>('conversation', {
            users: [user],
        }).then((a) => a.data);
    }

}