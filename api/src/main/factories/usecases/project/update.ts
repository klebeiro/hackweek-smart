import { updateProject } from "@/domain/usecases/project/update";
import { repoProject } from "@/main/factories/repositories";

export const updateProjectUsecase = updateProject(repoProject)