import { getAvaliationController as getController } from "@/application/controllers/avaliation"
import { getAvaliationUsecase } from "@/main/factories/usecases/avaliation"


export const getAvaliationController = getController(getAvaliationUsecase)