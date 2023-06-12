import { ForbiddenError } from "@/application/helpers/errors/http";
import { ShowProject } from "@/domain/usecases/project";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const showProjectController = (usecase: ShowProject) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const project = await usecase(parseInt(req.params.id));
        return res.json(project).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}