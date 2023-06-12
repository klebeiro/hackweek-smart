import {router} from '@/main/config/router';
import { getGoalController, insertGoalController, showGoalController, updateGoalController, deleteGoalController } from '@/main/factories/controllers/goal';
import { repoGoal } from "@/main/factories/repositories";
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const goalRoutes = () => {
    router.get('/goals/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), getGoalController);
    router.get('/goals/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), showGoalController);
    router.post('/goals/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor"]), insertGoalController);
    router.put('/goals/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor"]), updateGoalController);
    router.delete('/goals/:id', permissionsMiddleware(["Orientando", "Professor"]), deleteGoalController);
}