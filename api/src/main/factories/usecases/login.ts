import { loginUsecase as login } from "@/domain/usecases/login";
import { repoUser } from "@/main/factories/repositories";

export const loginUsecase = login(repoUser)