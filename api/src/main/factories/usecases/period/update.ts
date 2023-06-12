import { updatePeriod } from "@/domain/usecases/period/update";
import { repoPeriod } from "@/main/factories/repositories";

export const updatePeriodUsecase = updatePeriod(repoPeriod)