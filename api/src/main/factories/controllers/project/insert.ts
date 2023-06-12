import { insertProjectController as insertController } from "@/application/controllers/project"
import { insertProjectUsecase } from "@/main/factories/usecases/project"


export const insertProjectController = insertController(insertProjectUsecase)