import { AvaliationRepository } from "@/infra/database/repositories/avaliation";
import { Avaliation } from "@/domain/types/avaliation";

export type GetAvaliation = () => Promise<Avaliation[]>

export const getAvaliation = (avaliationRepo: AvaliationRepository) => (): Promise<Avaliation[]> => {
    return avaliationRepo.get();
}
