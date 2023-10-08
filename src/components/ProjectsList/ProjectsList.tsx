import { FC, useContext } from "react";
import { ProjectContext } from "../../state/context/projects";
import "./ProjectsList.css";

import { ProjectListItem } from "../ProjectListItem/ProjectListItem";

export const ProjectsList: FC = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="ProjectsList">
      {projects &&
        projects.map((project) => (
          <ProjectListItem
            key={`project_${project.id}`}
            id={project.id}
            name={project.name}
          />
        ))}
    </div>
  );
};
