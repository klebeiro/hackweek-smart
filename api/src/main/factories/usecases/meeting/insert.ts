import { insertMeeting } from "@/domain/usecases/meeting/insert";
import { repoMeeting } from "@/main/factories/repositories";

export const insertMeetingUsecase = insertMeeting(repoMeeting)