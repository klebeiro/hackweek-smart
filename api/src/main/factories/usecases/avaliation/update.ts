import { updateAvaliation } from "@/domain/usecases/avaliation/update";
import { repoAvaliation } from "@/main/factories/repositories";

export const updateAvaliationUsecase = updateAvaliation(repoAvaliation)