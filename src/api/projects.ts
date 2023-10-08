import { Project } from "../state/types/projects";
import { projects } from "./fakeData/projects.json";

export const fetchProjects = () => projects;

export const fetchProjectById = (id: string) =>
  projects.find((project) => project.id == id);
