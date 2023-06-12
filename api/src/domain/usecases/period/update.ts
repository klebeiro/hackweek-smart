import { PeriodRepository } from "@/infra/database/repositories/period";
import { Period, updatePeriod as updateType } from "@/domain/types/period";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdatePeriod = (data: updateType) => Promise<Period | null>

export const updatePeriod = (PeriodRepo: PeriodRepository) => async (data: updateType): Promise<Period | null> => {
    const period = PeriodRepo.getById(data.id);
    if(period === null) {
        throw new NotFound();
    }
    const periodUpdated = PeriodRepo.update(data);
    return periodUpdated;
}