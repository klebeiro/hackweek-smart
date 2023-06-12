import { showPeriodController as showController } from "@/application/controllers/period"
import { showPeriodUsecase } from "@/main/factories/usecases/period"


export const showPeriodController = showController(showPeriodUsecase)