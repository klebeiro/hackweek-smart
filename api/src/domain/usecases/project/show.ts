import { ProjectRepository } from "@/infra/database/repositories/project";
import { Project } from "@/domain/types/project";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowProject = (id: number) => Promise<Project | null>

export const showProject = (projectRepo: ProjectRepository) => (id: number): Promise<Project | null> => {
    const project = projectRepo.getById(id)
    if(project === null) {
        throw new NotFound();
    }
    return project
}