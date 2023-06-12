import { getUser } from "@/domain/usecases/user/get";
import { repoUser } from "@/main/factories/repositories";

export const getUserUsecase = getUser(repoUser)