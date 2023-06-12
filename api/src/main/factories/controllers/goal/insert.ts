import { insertGoalController as insertController } from "@/application/controllers/goal"
import { insertGoalUsecase } from "@/main/factories/usecases/goal/index"


export const insertGoalController = insertController(insertGoalUsecase)