import { verifyToken as VerifyToken } from "@/domain/usecases/verify-token";
import { repoUser } from "@/main/factories/repositories";

export const verifyTokenUsecase = VerifyToken(repoUser)