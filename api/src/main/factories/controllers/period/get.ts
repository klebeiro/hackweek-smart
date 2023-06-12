import { getPeriodController as getController } from "@/application/controllers/period"
import { getPeriodUsecase } from "@/main/factories/usecases/period"


export const getPeriodController = getController(getPeriodUsecase)