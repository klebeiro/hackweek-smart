import { insertPeriod } from "@/domain/usecases/period/insert";
import { repoPeriod } from "@/main/factories/repositories";

export const insertPeriodUsecase = insertPeriod(repoPeriod)