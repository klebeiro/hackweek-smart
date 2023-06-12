import { appDataSource } from "@/infra/database/data-source";
import { GoalRepository } from "@/infra/database/repositories/goal";

export const repoGoal = new GoalRepository(appDataSource)