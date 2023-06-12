import { GetPeriod } from "@/domain/usecases/period";
import { Request, Response } from "express";

export const getPeriodController = (usecase: GetPeriod) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const period = await usecase();
    return res.json(period).status(200)
}