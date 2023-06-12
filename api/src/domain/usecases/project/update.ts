import { ProjectRepository } from "@/infra/database/repositories/project";
import { Project, updateProject as updateType } from "@/domain/types/project";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdateProject = (data: updateType) => Promise<Project | null>

export const updateProject = (ProjectRepo: ProjectRepository) => async (data: updateType): Promise<Project | null> => {
    const project = await ProjectRepo.getById(data.id);
    if(project === null) {
        throw new NotFound();
    }
    const projectUpdated = ProjectRepo.update(data);
    return projectUpdated;
}