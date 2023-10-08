import { UserState } from "../types/auth";
import { UserAction } from "../types/auth";

export const AuthReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};
