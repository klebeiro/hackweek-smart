import { showUserController as showController } from "@/application/controllers/user"
import { showUserUsecase } from "@/main/factories/usecases/user"


export const showUserController = showController(showUserUsecase)