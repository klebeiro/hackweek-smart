import { updateProjectController as updateController } from "@/application/controllers/project"
import { updateProjectUsecase } from "@/main/factories/usecases/project"


export const updateProjectController = updateController(updateProjectUsecase)