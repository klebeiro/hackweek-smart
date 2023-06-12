import { showUser } from "@/domain/usecases/user/show";
import { repoUser } from "@/main/factories/repositories";

export const showUserUsecase = showUser(repoUser)