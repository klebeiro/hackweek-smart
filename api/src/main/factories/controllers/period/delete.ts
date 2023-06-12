import { deletePeriodController as deleteController } from "@/application/controllers/period"
import { deletePeriodUsecase } from "@/main/factories/usecases/period"


export const deletePeriodController = deleteController(deletePeriodUsecase)