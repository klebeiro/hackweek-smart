import { getMeetingController as getController } from "@/application/controllers/meeting"
import { getMeetingUsecase } from "@/main/factories/usecases/meeting"


export const getMeetingController = getController(getMeetingUsecase)