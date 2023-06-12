import { ProjectRepository } from "@/infra/database/repositories/project";
import { Project } from "@/domain/types/project";
import { NotFound } from "@/application/helpers/errors/http";

export type DeleteProject = (id: number) => Promise<boolean>

export const deleteProject = (projectRepo: ProjectRepository) => async (id: number): Promise<boolean> => {
    const hasDeleted = (await projectRepo.delete(id)).affected ? true : false;
    if(!hasDeleted) {
        throw new NotFound();
    }
    return hasDeleted;
}