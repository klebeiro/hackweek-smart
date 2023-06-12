import { UserRepository } from "@/infra/database/repositories/user";
import { User } from "@/domain/types/user";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowUser = (id: number) => Promise<User | null>

export const showUser = (userRepo: UserRepository) => (id: number): Promise<User | null> => {
    const user = userRepo.getById(id)
    if(user === null) {
        throw new NotFound();
    }
    return user
}