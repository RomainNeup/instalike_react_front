type UserActions = {
  LOGIN: string = 'LOGIN';
  REGISTER: string = 'REGISTER';
  LOGOUT: string = 'LOGOUT';
};

interface DispatchUserParams extends DispatchParams {
  payload: {
    username: string;
    email: string;
    description?: string;
  };
}

type DispatchUser = (params: DispatchUserParams) => void;
