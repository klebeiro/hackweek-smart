import { ForbiddenError } from "@/application/helpers/errors/http";
import { ShowPeriod } from "@/domain/usecases/period";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const showPeriodController = (usecase: ShowPeriod) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const period = await usecase(parseInt(req.params.id));
        return res.json(period).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}