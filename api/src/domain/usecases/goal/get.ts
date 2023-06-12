import { GoalRepository } from "@/infra/database/repositories/goal";
import { Goal } from "@/domain/types/goal";

export type GetGoal = () => Promise<Goal[]>

export const getGoal = (goalRepo: GoalRepository) => (): Promise<Goal[]> => {
    return goalRepo.get();
}
