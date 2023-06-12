import { PeriodRepository } from "@/infra/database/repositories/period";
import { Period } from "@/domain/types/period";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowPeriod = (id: number) => Promise<Period | null>

export const showPeriod = (periodRepo: PeriodRepository) => (id: number): Promise<Period | null> => {
    const period = periodRepo.getById(id)
    if(period === null) {
        throw new NotFound();
    }
    return period
}