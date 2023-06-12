import { appDataSource } from "@/infra/database/data-source";
import { ProjectRepository } from "@/infra/database/repositories/project";

export const repoProject = new ProjectRepository(appDataSource)