import { permissions } from "@/application/middlewares/permissions"
import { repoUser } from "@/main/factories/repositories/user"

export const permissionsMiddleware = permissions(repoUser)