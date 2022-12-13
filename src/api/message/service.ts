import API from '../api';

export default class MessageService {
  public static sendMessage(conversation: string, text: string): Promise<Message> {
    return API.post<Message>('message', {
      conversation,
      text,
    }).then((a) => a.data);
  }

  public static editMessage(message: string, text: string): Promise<Message> {
    return API.put<Message>(`message/${message}`, {
      text,
    }).then((a) => a.data);
  }

  public static deleteMessage(message: string): Promise<void> {
    return API.delete(`message/${message}`);
  }
}
