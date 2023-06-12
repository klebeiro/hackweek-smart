import { showAvaliation } from "@/domain/usecases/avaliation/show";
import { repoAvaliation } from "@/main/factories/repositories";

export const showAvaliationUsecase = showAvaliation(repoAvaliation)