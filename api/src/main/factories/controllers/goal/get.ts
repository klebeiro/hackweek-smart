import { getGoalController as getController } from "@/application/controllers/goal"
import { getGoalUsecase } from "@/main/factories/usecases/goal/index"


export const getGoalController = getController(getGoalUsecase)