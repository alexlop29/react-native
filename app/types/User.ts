type User = {
  email: string;
  name: string;
  auth_token_identifier: string;
};

type UserWithId = User & {
  id: string;
};

export { User, UserWithId };
