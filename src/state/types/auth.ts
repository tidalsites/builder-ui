interface User {
  username: string;
}

export type UserState = User | null;

type UserActionType = "LOGIN" | "LOGOUT";

export interface UserAction {
  type: UserActionType;
  payload: User;
}
