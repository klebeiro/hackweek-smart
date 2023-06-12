import { deleteProjectController as deleteController } from "@/application/controllers/project"
import { deleteProjectUsecase } from "@/main/factories/usecases/project"


export const deleteProjectController = deleteController(deleteProjectUsecase)