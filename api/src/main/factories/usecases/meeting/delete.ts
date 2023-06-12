import { deleteMeeting } from "@/domain/usecases/meeting/delete";
import { repoMeeting } from "@/main/factories/repositories";

export const deleteMeetingUsecase = deleteMeeting(repoMeeting)