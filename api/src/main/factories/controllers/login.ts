import { loginController as login } from "@/application/controllers/login"
import { loginUsecase } from "@/main/factories/usecases/login"


export const loginController = login(loginUsecase)