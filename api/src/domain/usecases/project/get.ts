import { ProjectRepository } from "@/infra/database/repositories/project";
import { Project } from "@/domain/types/project";

export type GetProject = () => Promise<Project[]>

export const getProject = (projectRepo: ProjectRepository) => (): Promise<Project[]> => {
    return projectRepo.get();
}
