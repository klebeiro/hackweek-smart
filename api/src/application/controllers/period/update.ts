import { ForbiddenError } from "@/application/helpers/errors/http";
import { UpdatePeriod } from "@/domain/usecases/period";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const updatePeriodController = (usecase: UpdatePeriod) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            id: parseInt(req.params.id),
            period: req.body.period,
            startsAt: req.body.startsAt,
            endsAt: req.body.endsAt,
            projects: req.body.projects
        }
        const periods = await usecase(data);
        return res.json(periods).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}