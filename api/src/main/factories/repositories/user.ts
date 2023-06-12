import { appDataSource } from "@/infra/database/data-source";
import { UserRepository } from "@/infra/database/repositories/user";

export const repoUser = new UserRepository(appDataSource)