import { insertUser } from "@/domain/usecases/user/insert";
import { repoUser } from "@/main/factories/repositories";

export const insertUserUsecase = insertUser(repoUser)