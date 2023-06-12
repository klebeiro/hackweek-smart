import { DeleteUser } from "@/domain/usecases/user";
import { Request, Response } from "express";

export const deleteUserController = (usecase: DeleteUser) => async (req: Request, res: Response): Promise<boolean> => {
    const deleted = await usecase(parseInt(req.params.id));
    console.log(deleted)
    return res.json(deleted).status(200) ? deleted : deleted
}