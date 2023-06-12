import { UserRepository } from "@/infra/database/repositories/user";
import { User } from "@/domain/types/user";

export type GetUser = () => Promise<User[]>

export const getUser = (userRepo: UserRepository) => (): Promise<User[]> => {
    return userRepo.get();
}
