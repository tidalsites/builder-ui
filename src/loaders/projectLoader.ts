import { fetchProjectById } from "../api/projects";
import { Project } from "../state/types/projects";

export function loader({ params }: any): Project | null {
  const project: Project | undefined = fetchProjectById(params.projectId);
  if (project) {
    return project;
  }

  return null;
}
