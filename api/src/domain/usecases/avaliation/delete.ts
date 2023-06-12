import { AvaliationRepository } from "@/infra/database/repositories/avaliation";
import { Avaliation } from "@/domain/types/avaliation";
import { NotFound } from "@/application/helpers/errors/http";

export type DeleteAvaliation = (id: number) => Promise<boolean>

export const deleteAvaliation = (avaliationRepo: AvaliationRepository) => async (id: number): Promise<boolean> => {
    const hasDeleted = (await avaliationRepo.delete(id)).affected ? true : false;
    if(!hasDeleted) {
        throw new NotFound();
    }
    return hasDeleted;
}