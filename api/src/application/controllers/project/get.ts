import { GetProject } from "@/domain/usecases/project";
import { Request, Response } from "express";

export const getProjectController = (usecase: GetProject) => async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const project = await usecase();
    return res.json(project).status(200)
}