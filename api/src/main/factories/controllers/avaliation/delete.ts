import { deleteAvaliationController as deleteController } from "@/application/controllers/avaliation"
import { deleteAvaliationUsecase } from "@/main/factories/usecases/avaliation"


export const deleteAvaliationController = deleteController(deleteAvaliationUsecase)