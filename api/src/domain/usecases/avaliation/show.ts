import { AvaliationRepository } from "@/infra/database/repositories/avaliation";
import { Avaliation } from "@/domain/types/avaliation";
import { NotFound } from "@/application/helpers/errors/http";

export type ShowAvaliation = (id: number) => Promise<Avaliation | null>

export const showAvaliation = (avaliationRepo: AvaliationRepository) => (id: number): Promise<Avaliation | null> => {
    const avaliation = avaliationRepo.getById(id)
    if(avaliation === null) {
        throw new NotFound();
    }
    return avaliation
}