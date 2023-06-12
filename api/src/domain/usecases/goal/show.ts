import { GoalRepository } from "@/infra/database/repositories/goal";
import { Goal } from "@/domain/types/goal";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowGoal = (id: number) => Promise<Goal | null>

export const showGoal = (GoalRepo: GoalRepository) => (id: number): Promise<Goal | null> => {
    const goal = GoalRepo.getById(id)
    if(goal === null) {
        throw new NotFound();
    }
    return goal
}