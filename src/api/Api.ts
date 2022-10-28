export default class API {
  private API_URL = 'http://localhost:3000';

  protected post(endpoint: string, body: Record<string, unknown>) {
    return fetch(`${this.API_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this.errorHandler);
  }

  protected errorHandler(response: Response) {
    if (!response.ok) {
      // TODO error handling
      // response.text().then((text) => {
      //   const { errors } = JSON.parse(text);
      //   errors.forEach((error: string) => store.dispatch("addError", error));
      // });
      return null;
    }
    return response.json().then((a) => {
      if (a.errors && a.errors.length) {
        // a.errors.forEach((error: string) => store.dispatch("addError", error));
        // TODO Error handling
      }
      return a;
    });
  }
}
