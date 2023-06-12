import { ForbiddenError } from "@/application/helpers/errors/http";
import { DeleteAvaliation } from "@/domain/usecases/avaliation";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const deleteAvaliationController = (usecase: DeleteAvaliation) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const deleted = await usecase(parseInt(req.params.id));
        console.log(deleted)
        return res.json(deleted).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}