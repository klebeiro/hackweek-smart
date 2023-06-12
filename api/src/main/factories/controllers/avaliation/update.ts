import { updateAvaliationController as updateController } from "@/application/controllers/avaliation"
import { updateAvaliationUsecase } from "@/main/factories/usecases/avaliation"


export const updateAvaliationController = updateController(updateAvaliationUsecase)