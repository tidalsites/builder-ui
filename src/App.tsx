import { useReducer } from "react";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { AuthContext } from "./state/context/auth";
import { AuthReducer } from "./state/reducer/auth";
import { Navbar } from "./components/Navbar/Navbar";
import { ProjectContext } from "./state/context/projects";
import { Outlet } from "react-router-dom";
import { ProjectsReducer } from "./state/reducer/projects";

function App() {
  const [user, dispatchAuth] = useReducer(AuthReducer, null);
  const [projects, dispatchProjects] = useReducer(ProjectsReducer, null);
  return (
    <AuthContext.Provider value={{ user, dispatchAuth }}>
      <ProjectContext.Provider value={{ projects, dispatchProjects }}>
        <Navbar />
        <Outlet />
      </ProjectContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
