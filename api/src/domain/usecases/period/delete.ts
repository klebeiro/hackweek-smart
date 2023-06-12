import { PeriodRepository } from "@/infra/database/repositories/period";
import { Period } from "@/domain/types/period";
import { NotFound } from "@/application/helpers/errors/http";

export type DeletePeriod = (id: number) => Promise<boolean>

export const deletePeriod = (periodRepo: PeriodRepository) => async (id: number): Promise<boolean> => {
    const hasDeleted = (await periodRepo.delete(id)).affected ? true : false;
    if(!hasDeleted) {
        throw new NotFound();
    }
    return hasDeleted;
}