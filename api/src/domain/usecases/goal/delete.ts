import { GoalRepository } from "@/infra/database/repositories/goal";
import { Goal } from "@/domain/types/goal";
import { NotFound } from "@/application/helpers/errors/http";

export type DeleteGoal = (id: number) => Promise<boolean>

export const deleteGoal = (GoalRepo: GoalRepository) => async (id: number): Promise<boolean> => {
    const hasDeleted = (await GoalRepo.delete(id)).affected ? true : false;
    if(!hasDeleted) {
        throw new NotFound();
    }
    return hasDeleted;
}