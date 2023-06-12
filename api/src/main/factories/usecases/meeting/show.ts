import { showMeeting } from "@/domain/usecases/meeting/show";
import { repoMeeting } from "@/main/factories/repositories";

export const showMeetingUsecase = showMeeting(repoMeeting)