import { updatePeriodController as updateController } from "@/application/controllers/period"
import { updatePeriodUsecase } from "@/main/factories/usecases/period"


export const updatePeriodController = updateController(updatePeriodUsecase)