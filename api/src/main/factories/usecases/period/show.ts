import { showPeriod } from "@/domain/usecases/period/show";
import { repoPeriod } from "@/main/factories/repositories";

export const showPeriodUsecase = showPeriod(repoPeriod)