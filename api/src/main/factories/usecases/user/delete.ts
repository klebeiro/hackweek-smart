import { deleteUser } from "@/domain/usecases/user/delete";
import { repoUser } from "@/main/factories/repositories";

export const deleteUserUsecase = deleteUser(repoUser)