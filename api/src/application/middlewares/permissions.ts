import { UserRepository } from "@/infra/database/repositories";
import { NextFunction, Request, Response } from "express";
import { NotFound } from "@/application/helpers/errors/http";

export const permissions = (userRepo: UserRepository) => (permissions: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    const requestPerson: Request & {userId?: number} = req
    if (requestPerson.userId !== undefined){
        const user = await userRepo.getById(requestPerson.userId)
        console.log(user)
        if (user === null) return res.json({error: "user doesn't exist"})
        if (permissions.find(permission => permission === user.type.type)) {
            next()
            return
        }
        else {
            return res.json({error:"access denied"})
        }
        
    }
    return res.json({error:"access denied"})
}