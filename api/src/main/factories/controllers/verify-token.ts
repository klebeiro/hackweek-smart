import { verifyTokenController as VerifyToken } from "@/application/controllers/verify-token"
import { verifyTokenUsecase } from "@/main/factories/usecases/verify-email"


export const verifyTokenController = VerifyToken(verifyTokenUsecase)