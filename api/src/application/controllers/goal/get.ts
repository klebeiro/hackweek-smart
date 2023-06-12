import { GetGoal } from "@/domain/usecases/goal";
import { Request, Response } from "express";

export const getGoalController = (usecase: GetGoal) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const goal = await usecase();
    return res.json(goal).status(200)
}