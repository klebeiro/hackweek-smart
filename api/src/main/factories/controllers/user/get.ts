import { getUserController as getController } from "@/application/controllers/user"
import { getUserUsecase } from "@/main/factories/usecases/user"


export const getUserController = getController(getUserUsecase)