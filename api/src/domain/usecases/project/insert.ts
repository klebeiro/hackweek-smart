import { ProjectRepository } from "@/infra/database/repositories/project";
import { Project, createProject } from "@/domain/types/project";
import { ForbiddenError } from "@/application/helpers/errors/http";

export type InsertProject = (data: createProject) => Promise<{project: Project} | null>

export const insertProject = (projectRepo: ProjectRepository) => async (data: createProject): Promise<{project: Project} | null> => {
    const project = await projectRepo.insert(Object.assign(data));
    console.log(project);
    if (project !== null) {
        return {project}
    }
    throw new ForbiddenError();
}