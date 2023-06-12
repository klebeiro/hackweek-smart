import { insertGoal } from "@/domain/usecases/goal/insert";
import { repoGoal } from "@/main/factories/repositories";

export const insertGoalUsecase = insertGoal(repoGoal)