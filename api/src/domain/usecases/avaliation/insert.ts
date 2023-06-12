import { AvaliationRepository } from "@/infra/database/repositories/avaliation";
import { Avaliation, createAvaliation } from "@/domain/types/avaliation";
import { ForbiddenError } from "@/application/helpers/errors/http";

export type InsertAvaliation = (data: createAvaliation) => Promise<{avaliation: Avaliation} | null>

export const insertAvaliation = (avaliationRepo: AvaliationRepository) => async (data: createAvaliation): Promise<{avaliation: Avaliation} | null> => {
    const avaliation = await avaliationRepo.insert(data);
    if (avaliation !== null) {
        return {avaliation}
    }
    throw new ForbiddenError();
}