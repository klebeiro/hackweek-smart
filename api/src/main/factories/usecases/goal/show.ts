import { showGoal } from "@/domain/usecases/goal/show";
import { repoGoal } from "@/main/factories/repositories";

export const showGoalUsecase = showGoal(repoGoal)