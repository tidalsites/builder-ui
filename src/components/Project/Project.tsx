import { FC } from "react";
import "./Project.css";
import { useLoaderData } from "react-router-dom";

import { Project as ProjectType } from "../../state/types/projects";

export const Project: FC = () => {
  const project = useLoaderData() as ProjectType;
  const orgData = project.client.organization;
  return (
    <div className="Project">
      <h1 className="Project__header">{project.name}</h1>
      <div className="Project__org">
        <div className="pair">
          <span>Organization: </span>
          <span>{orgData.organization_name}</span>
        </div>
        <div className="pair">
          <span>Address: </span>
          <span>{orgData.organization_address}</span>
        </div>
        <div className="pair">
          <span>Phone: </span>
          <span>{orgData.organization_phone}</span>
        </div>
        <div className="pair">
          <span>Point of Contact: </span>
          <span>{project.client.primary_poc}</span>
        </div>
      </div>
    </div>
  );
};
