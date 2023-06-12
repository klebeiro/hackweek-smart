import { GoalRepository } from "@/infra/database/repositories/goal";
import { Goal, updateGoal as updateType } from "@/domain/types/goal";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdateGoal = (data: updateType) => Promise<Goal | null>

export const updateGoal = (goalRepo: GoalRepository) => async (data: updateType): Promise<Goal | null> => {
    const goal = goalRepo.getById(data.id);
    if(goal === null) {
        throw new NotFound();
    }
    const goalUpdated = goalRepo.update(data);
    return goalUpdated;
}