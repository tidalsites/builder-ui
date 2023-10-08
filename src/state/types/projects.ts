import { Client } from "./client";

export interface Project {
  id: string;
  name: string;
  client: Client;
}

type ProjectType =
  | "GET_PROJECTS"
  | "CREATE_PROJECT"
  | "DELETE_PROJECT"
  | "UPDATE_PROJECT";

export type ProjectList = Project[] | null;

export interface ProjectAction {
  type: ProjectType;
  payload: any;
}

export const defaultProjectState = {
  projects: null,
  dispatchProjects: () => {},
};
