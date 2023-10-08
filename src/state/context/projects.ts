import { createContext, Dispatch } from "react";
import {
  defaultProjectState,
  ProjectAction,
  ProjectList,
} from "../types/projects";

export const ProjectContext = createContext<{
  projects: ProjectList;
  dispatchProjects: Dispatch<ProjectAction>;
}>(defaultProjectState);
