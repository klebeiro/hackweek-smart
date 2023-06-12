import { AvaliationRepository } from "@/infra/database/repositories/avaliation";
import { Avaliation, updateAvaliation as updateType } from "@/domain/types/avaliation";
import { encrypt } from "@/infra/utils/bcrypt";
import { NotFound } from "@/application/helpers/errors/http";

export type UpdateAvaliation = (data: updateType) => Promise<Avaliation | null>

export const updateAvaliation = (AvaliationRepo: AvaliationRepository) => async (data: updateType): Promise<Avaliation | null> => {
    const avaliation = AvaliationRepo.getById(data.id);
    if(avaliation === null) {
        throw new NotFound();
    }
    return AvaliationRepo.update(data);
}