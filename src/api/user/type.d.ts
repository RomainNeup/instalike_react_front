interface User {
  username: string;
  email: string;
  description?: string;
}

interface Login {
  identifier: string;
  password: string;
}

interface Register {
  username: string;
  email: string;
  password: string;
}
