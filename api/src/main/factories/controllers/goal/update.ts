import { updateGoalController as updateController } from "@/application/controllers/goal"
import { updateGoalUsecase } from "@/main/factories/usecases/goal/index"


export const updateGoalController = updateController(updateGoalUsecase)