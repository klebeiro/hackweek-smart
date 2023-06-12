import { UserRepository } from "@/infra/database/repositories/user";
import { User } from "@/domain/types/user";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type DeleteUser = (id: number) => Promise<boolean>

export const deleteUser = (userRepo: UserRepository) => async (id: number): Promise<boolean> => {
    const hasDeleted = (await userRepo.delete(id)).affected ? true : false;
    if(!hasDeleted) {
        throw new NotFound();
    }
    return hasDeleted;
}