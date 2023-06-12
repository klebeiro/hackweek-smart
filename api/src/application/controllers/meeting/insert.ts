import { ForbiddenError } from "@/application/helpers/errors/http";
import { InsertMeeting } from "@/domain/usecases/meeting";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const insertMeetingController = (usecase: InsertMeeting) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            local: req.body.local,
            startsAt: req.body.startsAt,
            project: req.body.project,
            meetingDetails: req.body.meetingDetails,
            period: req.body.period,
        }
        const meeting = await usecase(data);
        return res.json(meeting).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}