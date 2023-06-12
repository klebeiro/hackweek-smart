import { deleteGoal } from "@/domain/usecases/goal/delete";
import { repoGoal } from "@/main/factories/repositories";

export const deleteGoalUsecase = deleteGoal(repoGoal)