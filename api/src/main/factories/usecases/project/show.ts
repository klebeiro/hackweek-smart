import { showProject } from "@/domain/usecases/project/show";
import { repoProject } from "@/main/factories/repositories";

export const showProjectUsecase = showProject(repoProject)