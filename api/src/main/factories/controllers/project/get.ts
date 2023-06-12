import { getProjectController as getController } from "@/application/controllers/project"
import { getProjectUsecase } from "@/main/factories/usecases/project"


export const getProjectController = getController(getProjectUsecase)