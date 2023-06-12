import { insertAvaliationController as insertController } from "@/application/controllers/avaliation"
import { insertAvaliationUsecase } from "@/main/factories/usecases/avaliation"


export const insertAvaliationController = insertController(insertAvaliationUsecase)