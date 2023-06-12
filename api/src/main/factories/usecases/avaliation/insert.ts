import { insertAvaliation } from "@/domain/usecases/avaliation/insert";
import { repoAvaliation } from "@/main/factories/repositories";

export const insertAvaliationUsecase = insertAvaliation(repoAvaliation)