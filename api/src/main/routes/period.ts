import {router} from '@/main/config/router';
import { getPeriodController, insertPeriodController, showPeriodController, updatePeriodController, deletePeriodController } from '@/main/factories/controllers/period';
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const periodRoutes = () => {
    router.get('/period/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), getPeriodController);
    router.get('/period/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), showPeriodController);
    router.post('/period/', isLoggedInMiddleware, permissionsMiddleware(["Coordenação"]), insertPeriodController);
    router.put('/period/:id', isLoggedInMiddleware, permissionsMiddleware(["Coordenação"]), updatePeriodController);
    router.delete('/period/:id', isLoggedInMiddleware, permissionsMiddleware(["Coordenação"]), deletePeriodController);
}