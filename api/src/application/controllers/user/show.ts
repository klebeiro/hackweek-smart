import { ShowUser } from "@/domain/usecases/user";
import { Request, Response } from "express";

export const showUserController = (usecase: ShowUser) => async (req: Request, res: Response): Promise<void> => {
    const user = await usecase(parseInt(req.params.id));
    res.json(user).status(200)
}