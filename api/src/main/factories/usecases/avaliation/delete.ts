import { deleteAvaliation } from "@/domain/usecases/avaliation/delete";
import { repoAvaliation } from "@/main/factories/repositories";

export const deleteAvaliationUsecase = deleteAvaliation(repoAvaliation)