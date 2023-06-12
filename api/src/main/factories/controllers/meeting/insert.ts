import { insertMeetingController as insertController } from "@/application/controllers/meeting"
import { insertMeetingUsecase } from "@/main/factories/usecases/meeting"


export const insertMeetingController = insertController(insertMeetingUsecase)