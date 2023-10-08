import { createContext, Dispatch } from "react";
import { UserAction, UserState } from "../types/auth";

export const AuthContext = createContext<{
  user: UserState;
  dispatchAuth: Dispatch<UserAction>;
}>({ user: null, dispatchAuth: () => {} });
