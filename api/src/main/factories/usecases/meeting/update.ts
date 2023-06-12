import { updateMeeting } from "@/domain/usecases/meeting/update";
import { repoMeeting } from "@/main/factories/repositories";

export const updateMeetingUsecase = updateMeeting(repoMeeting)