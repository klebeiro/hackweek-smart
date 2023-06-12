import { MeetingRepository } from "@/infra/database/repositories/meeting";
import { Meeting, updateMeeting as updateType } from "@/domain/types/meeting";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdateMeeting = (data: updateType) => Promise<Meeting | null>

export const updateMeeting = (meetingRepo: MeetingRepository) => async (data: updateType): Promise<Meeting | null> => {
    const meeting = await meetingRepo.getById(data.id);
    if(meeting === null) {
        throw new NotFound();
    }
    data.observations ? delete data.reason : delete data.observations
    return await meetingRepo.update(data)
}