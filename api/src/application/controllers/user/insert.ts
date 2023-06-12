import { InsertUser } from "@/domain/usecases/user";
import { Request, Response } from "express";

export const insertUserController = (usecase: InsertUser) => async (req: Request, res: Response): Promise<void> => {
    console.log(req.body)

    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const users = await usecase(data);
    res.json(users).status(200)
}