import { MeetingRepository } from "@/infra/database/repositories/meeting";
import { Meeting } from "@/domain/types/meeting";

export type GetMeeting = () => Promise<Meeting[]>

export const getMeeting = (meetingRepo: MeetingRepository) => async (): Promise<Meeting[]> => {
    return await meetingRepo.get();
}
