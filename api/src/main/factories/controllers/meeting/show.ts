import { showMeetingController as showController } from "@/application/controllers/meeting"
import { showMeetingUsecase } from "@/main/factories/usecases/meeting"


export const showMeetingController = showController(showMeetingUsecase)