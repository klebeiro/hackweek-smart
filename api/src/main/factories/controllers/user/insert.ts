import { insertUserController as insertController } from "@/application/controllers/user"
import { insertUserUsecase } from "@/main/factories/usecases/user"


export const insertUserController = insertController(insertUserUsecase)