import { LoginUsecase } from "@/domain/usecases/login";
import { Request, Response } from "express";

export const loginController = (usecase: LoginUsecase) => async (req: Request, res: Response): Promise<void> => {
    try{
        const token = await usecase(req.body.email, req.body.password);
        res.json(token).status(200)
    }catch (e: any){
        res.json(e)
    }
}