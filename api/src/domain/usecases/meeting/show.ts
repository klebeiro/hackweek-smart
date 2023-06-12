import { MeetingRepository } from "@/infra/database/repositories/meeting";
import { Meeting } from "@/domain/types/meeting";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowMeeting = (id: number) => Promise<Meeting | null>

export const showMeeting = (meetingRepo: MeetingRepository) => async (id: number): Promise<Meeting | null> => {
    const meeting = await meetingRepo.getById(id)
    if(meeting === null) {
        throw new NotFound();
    }
    return meeting
}