import API from '../api';

export default class ConversationService {
  public static createConversation(user: string): Promise<Conversation> {
    return API.post<Conversation>('conversation', {
      receiver: user,
    }).then((a) => a.data);
  }

  public static getConversation(id: string): Promise<Conversation> {
    return API.get<Conversation>(`conversation/${id}`).then((a) => a.data);
  }

  public static getConversations(): Promise<Conversation[]> {
    return API.get<Conversation[]>('conversation').then((a) => a.data);
  }

  public static deleteConversation(id: string): Promise<void> {
    return API.delete(`conversation/${id}`);
  }
}
