import { deleteGoalController as deleteController } from "@/application/controllers/goal"
import { deleteGoalUsecase } from "@/main/factories/usecases/goal/index"

export const deleteGoalController = deleteController(deleteGoalUsecase)