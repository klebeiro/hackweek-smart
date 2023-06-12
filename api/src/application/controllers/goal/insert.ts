import { ForbiddenError } from "@/application/helpers/errors/http";
import { InsertGoal } from "@/domain/usecases/goal";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const insertGoalController = (usecase: InsertGoal) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            project: req.body.project,
            startsAt: req.body.startsAt,
            endsAt: req.body.endsAt,
            finishedAt: req.body.finishedAt,
            expectedAt: req.body.expectedAt,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
            meeting: req.body.meeting,
            period: req.body.period,
        }
        console.log(data)
        const goal = await usecase(data);
        return res.json(goal).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}