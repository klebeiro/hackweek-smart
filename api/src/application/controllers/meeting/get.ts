import { GetMeeting } from "@/domain/usecases/meeting";
import { Request, Response } from "express";

export const getMeetingController = (usecase: GetMeeting) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const meeting = await usecase();
    return res.json(meeting).status(200)
}