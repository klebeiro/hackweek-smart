import { isLoggedin } from '@/application/middlewares/is-loggedin';
import { permissions } from '@/application/middlewares/permissions';
import {router} from '@/main/config/router';
import { getUserController, insertUserController, showUserController, updateUserController, deleteUserController } from '@/main/factories/controllers/user';
import { repoUser } from "@/main/factories/repositories";
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const userRoutes = () => {
    router.get('/users/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), getUserController);
    router.get('/users/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), showUserController);
    router.post('/users/', insertUserController);
    router.put('/users/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), updateUserController);
    router.delete('/users/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), deleteUserController);
}