import { MeetingRepository } from "@/infra/database/repositories/meeting";
import { Meeting, createMeeting } from "@/domain/types/meeting";
import { ForbiddenError } from "@/application/helpers/errors/http";
import { notifyQueue } from "@/infra/utils/queue";

export type InsertMeeting = (data: createMeeting) => Promise<{meeting: Meeting} | null>

export const insertMeeting = (meetingRepo: MeetingRepository) => async (data: createMeeting): Promise<{meeting: Meeting} | null> => {
    const meeting = await meetingRepo.insert(Object.assign(data));
    if (meeting !== null) {
        const {project: {orientador, orientando, coorientador}} = meeting
        notifyQueue.add({meetingDetails: meeting.meetingDetails, name: orientador.name, email: orientador.email, local: meeting.local }, {delay: (new Date(meeting.startsAt).getTime() - 60000 * 10) - new Date().getTime()})

        notifyQueue.add({meetingDetails: meeting.meetingDetails, name: orientando.name, email: orientando.email, local: meeting.local}, {delay: (new Date(meeting.startsAt).getTime() - 60000 * 10) - new Date().getTime()})

        if (coorientador !== undefined){
            notifyQueue.add({meetingDetails: meeting.meetingDetails, name: coorientador.name, email: coorientador.email, local: meeting.local}, {delay: (new Date(meeting.startsAt).getTime() - 60000 * 10) - new Date().getTime()})
        }
        
        return {meeting}
    }
    throw new ForbiddenError();
}