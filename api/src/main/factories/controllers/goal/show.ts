import { showGoalController as showController } from "@/application/controllers/goal"
import { showGoalUsecase } from "@/main/factories/usecases/goal/index"


export const showGoalController = showController(showGoalUsecase)