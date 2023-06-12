import { VerifyToken } from "@/domain/usecases/verify-token";
import { Request, Response } from "express";

export const verifyTokenController = (usecase: VerifyToken) => async (req: Request, res: Response): Promise<void> => {
    try {
        const token = await usecase(req.body.token)
        res.json(token).status(200)
    } catch(e) {
        res.json(e)
    }
}