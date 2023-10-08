import { FC, useContext } from "react";
import { AuthContext } from "../../state/context/auth";

export const Login: FC = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const handleLogin = () => {
    dispatchAuth({ type: "LOGIN", payload: { username: "devin" } });
  };
  return (
    <div className="Login">
      <div className="Login__prompt">
        <form onSubmit={handleLogin}>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
