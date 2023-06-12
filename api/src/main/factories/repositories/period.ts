import { appDataSource } from "@/infra/database/data-source";
import { PeriodRepository } from "@/infra/database/repositories/period";

export const repoPeriod = new PeriodRepository(appDataSource)