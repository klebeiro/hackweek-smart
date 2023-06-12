import { getGoal } from "@/domain/usecases/goal/get";
import { repoGoal } from "@/main/factories/repositories";

export const getGoalUsecase = getGoal(repoGoal)