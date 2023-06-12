import { isLoggedin } from "@/application/middlewares/is-loggedin"
import { repoUser } from "@/main/factories/repositories/user"

export const isLoggedInMiddleware = isLoggedin(repoUser)