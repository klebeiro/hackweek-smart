import { UserRepository } from "@/infra/database/repositories/user";
import { User, updateUser as updateType } from "@/domain/types/user";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdateUser = (data: updateType) => Promise<User | null>

export const updateUser = (userRepo: UserRepository) => async (data: updateType): Promise<User | null> => {
    const user = userRepo.getById(data.id);
    if(user === null) {
        throw new NotFound();
    }
    const userUpdated = data.password ? userRepo.update(Object.assign(data, {password:  await encrypt(data.password)})) : userRepo.update(data);
    return userUpdated;
}