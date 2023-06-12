import { appDataSource } from "@/infra/database/data-source";
import { MeetingRepository } from "@/infra/database/repositories/";

export const repoMeeting = new MeetingRepository(appDataSource)