import { updateGoal } from "@/domain/usecases/goal/update";
import { repoGoal } from "@/main/factories/repositories";

export const updateGoalUsecase = updateGoal(repoGoal)