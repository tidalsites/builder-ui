import { FC, useContext, useEffect } from "react";
import "./ProjectManagement.css";
import { Link } from "react-router-dom";

import { ProjectsList } from "../ProjectsList/ProjectsList";
import { fetchProjects } from "../../api/projects";
import { ProjectContext } from "../../state/context/projects";

export const ProjectManagementPage: FC = () => {
  const { dispatchProjects } = useContext(ProjectContext);

  useEffect(() => {
    const newProjects = fetchProjects();
    dispatchProjects({ type: "GET_PROJECTS", payload: newProjects });
  }, []);

  return (
    <div className="ProjectManagementPage">
      <ProjectsList />
      <Link className="link-button" to="/projects/create">
        + New Project
      </Link>
    </div>
  );
};
