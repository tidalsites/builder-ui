import { ProjectAction, ProjectList } from "../types/projects";

export const ProjectsReducer = (
  state: ProjectList,
  action: ProjectAction
): ProjectList => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return action.payload;
    case "GET_PROJECTS":
      return action.payload;
    case "DELETE_PROJECT":
      return state;
    case "UPDATE_PROJECT":
      return state;
    default:
      return state;
  }
};
