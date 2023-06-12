import { UserRepository } from "@/infra/database/repositories/user";
import { User } from "@/domain/types/user";
import { generateToken } from "@/infra/utils/jwt";
import { NotFound } from "@/application/helpers/errors/http";

export type VerifyToken = (token:string) => Promise<Object>

export const verifyToken = (userRepo: UserRepository) => async (token:string): Promise<Object> => {
    const user = await userRepo.getByToken(token);
    if(user !== null) {
        user.isVerified = true;
        user.token = "";
        await userRepo.update(user);
        return { accessToken: generateToken({id: user?.id, password: user?.password}), id: user.id};
    } else {
        throw new NotFound();
    }
}
