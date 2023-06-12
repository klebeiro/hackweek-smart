import { ForbiddenError } from "@/application/helpers/errors/http";
import { ShowGoal } from "@/domain/usecases/goal";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const showGoalController = (usecase: ShowGoal) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const goal = await usecase(parseInt(req.params.id));
        return res.json(goal).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}