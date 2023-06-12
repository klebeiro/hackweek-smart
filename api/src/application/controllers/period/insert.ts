import { ForbiddenError } from "@/application/helpers/errors/http";
import { InsertPeriod } from "@/domain/usecases/period";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const insertPeriodController = (usecase: InsertPeriod) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            period: req.body.period,
            startsAt: req.body.startsAt,
            endsAt: req.body.endsAt,
            projects: req.body.projects
        }
        const period = await usecase(data);
        return res.json(period).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}