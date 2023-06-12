import { NotFound } from "@/application/helpers/errors/http";
import { UpdateMeeting } from "@/domain/usecases/meeting";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const updateMeetingController = (usecase: UpdateMeeting) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            id: parseInt(req.params.id),
            local: req.body.local,
            project: req.body.project,
            confirmedOrientador: req.body.confirmedOrientador,
            confirmedOrientando: req.body.confirmedOrientando,
            confirmedCoorientador: req.body.confirmedCoorientador,
            reason: req.body.reason,
            observations: req.body.observations,
            meetingDetails: req.body.meetingDetails,
            period: req.body.period,
        }
        const meetings = await usecase(data);
        return res.json(meetings).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof NotFound) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}