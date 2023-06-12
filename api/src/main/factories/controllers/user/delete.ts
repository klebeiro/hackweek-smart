import { deleteUserController as deleteController } from "@/application/controllers/user"
import { deleteUserUsecase } from "@/main/factories/usecases/user"


export const deleteUserController = deleteController(deleteUserUsecase)