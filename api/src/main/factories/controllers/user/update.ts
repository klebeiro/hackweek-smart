import { updateUserController as updateController } from "@/application/controllers/user"
import { updateUserUsecase } from "@/main/factories/usecases/user"


export const updateUserController = updateController(updateUserUsecase)