import { showProjectController as showController } from "@/application/controllers/project"
import { showProjectUsecase } from "@/main/factories/usecases/project"


export const showProjectController = showController(showProjectUsecase)