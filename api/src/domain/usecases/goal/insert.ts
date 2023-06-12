import { GoalRepository } from "@/infra/database/repositories/goal";
import { Goal, createGoal } from "@/domain/types/goal";
import { ForbiddenError } from "@/application/helpers/errors/http";

export type InsertGoal = (data: createGoal) => Promise<{goal: Goal} | null>

export const insertGoal = (goalRepo: GoalRepository) => async (data: createGoal): Promise<{goal: Goal} | null> => {
    const goal = await goalRepo.insert(data);
    if (goal !== null) {
        return {goal}
    }
    throw new ForbiddenError();
}