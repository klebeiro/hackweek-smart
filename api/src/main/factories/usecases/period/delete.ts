import { deletePeriod } from "@/domain/usecases/period/delete";
import { repoPeriod } from "@/main/factories/repositories";

export const deletePeriodUsecase = deletePeriod(repoPeriod)