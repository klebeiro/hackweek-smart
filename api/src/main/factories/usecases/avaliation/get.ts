import { getAvaliation } from "@/domain/usecases/avaliation/get";
import { repoAvaliation } from "@/main/factories/repositories";

export const getAvaliationUsecase = getAvaliation(repoAvaliation)