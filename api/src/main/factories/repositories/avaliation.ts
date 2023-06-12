import { appDataSource } from "@/infra/database/data-source";
import { AvaliationRepository } from "@/infra/database/repositories/avaliation";

export const repoAvaliation = new AvaliationRepository(appDataSource)