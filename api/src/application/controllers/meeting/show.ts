import { NotFound } from "@/application/helpers/errors/http";
import { ShowMeeting } from "@/domain/usecases/meeting";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const showMeetingController = (usecase: ShowMeeting) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const meeting = await usecase(parseInt(req.params.id));
        return res.json(meeting).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof NotFound) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}