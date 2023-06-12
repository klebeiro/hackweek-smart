import { getPeriod } from "@/domain/usecases/period/get";
import { repoPeriod } from "@/main/factories/repositories";

export const getPeriodUsecase = getPeriod(repoPeriod)