import { ForbiddenError } from "@/application/helpers/errors/http";
import { InsertAvaliation } from "@/domain/usecases/avaliation";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const insertAvaliationController = (usecase: InsertAvaliation) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            avaliation: req.body.avaliation,
            grade: req.body.grade,
            project: req.body.project,
        }
        const avaliation = await usecase(data);
        return res.json(avaliation).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}