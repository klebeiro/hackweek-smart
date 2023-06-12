import { PeriodRepository } from "@/infra/database/repositories/period";
import { Period, createPeriod } from "@/domain/types/period";
import { ForbiddenError } from "@/application/helpers/errors/http";

export type InsertPeriod = (data: createPeriod) => Promise<{period: Period} | null>

export const insertPeriod = (periodRepo: PeriodRepository) => async (data: createPeriod): Promise<{period: Period} | null> => {
    const period = await periodRepo.insert(data);
    console.log(period);
    if (period !== null) {
        return {period}
    }
    throw new ForbiddenError();
}