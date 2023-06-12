import { PeriodRepository } from "@/infra/database/repositories/period";
import { Period } from "@/domain/types/period";

export type GetPeriod = () => Promise<Period[]>

export const getPeriod = (periodRepo: PeriodRepository) => (): Promise<Period[]> => {
    return periodRepo.get();
}
