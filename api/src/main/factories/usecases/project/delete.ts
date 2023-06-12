import { deleteProject } from "@/domain/usecases/project/delete";
import { repoProject } from "@/main/factories/repositories";

export const deleteProjectUsecase = deleteProject(repoProject)