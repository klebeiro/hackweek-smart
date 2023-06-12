import { deleteMeetingController as deleteController } from "@/application/controllers/meeting"
import { deleteMeetingUsecase } from "@/main/factories/usecases/meeting"


export const deleteMeetingController = deleteController(deleteMeetingUsecase)