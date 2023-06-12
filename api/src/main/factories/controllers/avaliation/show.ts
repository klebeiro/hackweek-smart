import { showAvaliationController as showController } from "@/application/controllers/avaliation"
import { showAvaliationUsecase } from "@/main/factories/usecases/avaliation"


export const showAvaliationController = showController(showAvaliationUsecase)