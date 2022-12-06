import API from "../api";

export default class MessageService {
    public static sendMessage(conversation: string, text: string): Promise<Message> {
        return API.post<Message>('message', {
            conversation,
            text,
        }).then((a) => a.data);
    }
}