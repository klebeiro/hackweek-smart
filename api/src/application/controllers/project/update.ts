import { ForbiddenError } from "@/application/helpers/errors/http";
import { UpdateProject } from "@/domain/usecases/project";
import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";

export const updateProjectController = (usecase: UpdateProject) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const data = {
            id: parseInt(req.params.id),
            title: req.body.title,
            orientador: req.body.orientador,
            orientando: req.body.orientando,
            coorientador: req.body.coorientador,
            periods: req.body.periods,
            terminate: req.body.terminate,
        }
        const projects = await usecase(data);
        return res.json(projects).status(200)
    }catch(e: unknown){
        if (e instanceof QueryFailedError) return res.json({error: e.message})
        else if (e instanceof ForbiddenError) return res.json({error: e.message})
        else if (e instanceof Error) return res.json({error: e.message})
        else return res.json({error: e})
        
    }
}