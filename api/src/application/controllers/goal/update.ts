import { ForbiddenError } from "@/application/helpers/errors/http";
import { UpdateGoal } from "@/domain/usecases/goal";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const updateGoalController = (usecase: UpdateGoal) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            id: req.body.id,
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
        const goals = await usecase(data);
        return res.json(goals).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}