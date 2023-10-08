import { FC } from "react";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";
import { Project } from "../../state/types/projects";

export const ProjectListItem: FC<Project> = ({ id, name }) => {
  return (
    <div className="Project">
      <Link to={`/projects/${id}`}>{name}</Link>
    </div>
  );
};
