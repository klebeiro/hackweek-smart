import { getProject } from "@/domain/usecases/project/get";
import { repoProject } from "@/main/factories/repositories";

export const getProjectUsecase = getProject(repoProject)