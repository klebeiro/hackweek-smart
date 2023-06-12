import {router} from '@/main/config/router';
import { getAvaliationController, insertAvaliationController, showAvaliationController, updateAvaliationController, deleteAvaliationController } from '@/main/factories/controllers/avaliation';
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const avaliationRoutes = () => {
    router.get('/avaliation/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), getAvaliationController);
    router.get('/avaliation/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), showAvaliationController);
    router.post('/avaliation/', isLoggedInMiddleware, permissionsMiddleware(["Professor"]), insertAvaliationController);
    router.put('/avaliation/:id', isLoggedInMiddleware, permissionsMiddleware(["Professor"]), updateAvaliationController);
    router.delete('/avaliation/:id', isLoggedInMiddleware, permissionsMiddleware(["Professor"]), deleteAvaliationController);
}