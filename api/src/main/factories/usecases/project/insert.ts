import { insertProject } from "@/domain/usecases/project/insert";
import { repoProject } from "@/main/factories/repositories";

export const insertProjectUsecase = insertProject(repoProject)