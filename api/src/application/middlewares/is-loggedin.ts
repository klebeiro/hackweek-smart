import { UserRepository } from "@/infra/database/repositories";
import { validateToken } from "@/infra/utils/jwt";
import { NextFunction, Request, Response } from "express";
import { NotFound } from "@/application/helpers/errors/http";

export const isLoggedin = (userRepo: UserRepository) => async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === undefined) return res.json({error:"token not"})
    const token = req.headers.authorization
    const {id} = validateToken(token);
    if (id === undefined) return res.json({error:"invalid token"})
    const user = await userRepo.getById(id)
    if (user === null) throw new NotFound()
    req = Object.assign(req, {userId: user.id})
    next()
}