import { getMeeting } from "@/domain/usecases/meeting/get";
import { repoMeeting } from "@/main/factories/repositories";

export const getMeetingUsecase = getMeeting(repoMeeting)