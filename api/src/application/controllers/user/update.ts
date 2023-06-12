import { UpdateUser } from "@/domain/usecases/user";
import { Request, Response } from "express";

export const updateUserController = (usecase: UpdateUser) => async (req: Request, res: Response): Promise<void> => {
    const data = {
        id: parseInt(req.params.id),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const users = await usecase(data);
    res.json(users).status(200)
}