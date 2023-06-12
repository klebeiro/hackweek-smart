import { ForbiddenError, UnauthorizedError } from "@/application/helpers/errors/http";
import { UserRepository } from "@/infra/database/repositories";
import { compare } from "@/infra/utils/bcrypt";
import { generateToken } from "@/infra/utils/jwt";

export type Setup = (repo: UserRepository) => LoginUsecase
export type LoginUsecase = (email: string, password: string) => Promise<{accessToken: string, id: number}>

export const loginUsecase = (repo: UserRepository) => async (email: string, password: string) => {
    const user = await repo.getByEmail(email);
    if (user === null) throw new UnauthorizedError();
    console.log(user)
    if (await compare(password, user.password) && user.isVerified){
        return { accessToken: generateToken({id: user.id, password: user.password}), id: user.id }
    }else{
        throw new ForbiddenError();
    }
}