import { GetUser } from "@/domain/usecases/user";
import { Request, Response } from "express";

export const getUserController = (usecase: GetUser) => async (req: Request, res: Response): Promise<void> => {
    const users = await usecase();
    res.json(users).status(200)
}