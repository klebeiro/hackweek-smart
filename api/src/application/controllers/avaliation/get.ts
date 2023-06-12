import { GetAvaliation } from "@/domain/usecases/avaliation";
import { Request, Response } from "express";

export const getAvaliationController = (usecase: GetAvaliation) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const avaliation = await usecase();
    return res.json(avaliation).status(200)
}