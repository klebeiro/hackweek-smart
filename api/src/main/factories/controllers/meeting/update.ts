import { updateMeetingController as updateController } from "@/application/controllers/meeting"
import { updateMeetingUsecase } from "@/main/factories/usecases/meeting"


export const updateMeetingController = updateController(updateMeetingUsecase)