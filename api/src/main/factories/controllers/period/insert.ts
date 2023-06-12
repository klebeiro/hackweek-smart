import { insertPeriodController as insertController } from "@/application/controllers/period"
import { insertPeriodUsecase } from "@/main/factories/usecases/period"


export const insertPeriodController = insertController(insertPeriodUsecase)