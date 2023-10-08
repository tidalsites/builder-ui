import { createBrowserRouter } from "react-router-dom";
import { ProjectManagementPage } from "./components/ProjectManagement/ProjectManagementPage.js";
import { ProjectCreation } from "./components/ProjectCreation/ProjectCreation.js";
import { Project } from "./components/Project/Project.js";
import App from "./App.js";
import { loader as projectLoader } from "./loaders/projectLoader.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects",
        element: <ProjectManagementPage />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
        loader: projectLoader,
      },
      {
        path: "projects/create",
        element: <ProjectCreation />,
      },
    ],
  },
]);
