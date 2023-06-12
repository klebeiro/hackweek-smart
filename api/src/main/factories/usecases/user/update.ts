import { updateUser } from "@/domain/usecases/user/update";
import { repoUser } from "@/main/factories/repositories";

export const updateUserUsecase = updateUser(repoUser)