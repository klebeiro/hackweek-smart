import {router} from '@/main/config/router';
import { getProjectController, insertProjectController, showProjectController, updateProjectController, deleteProjectController } from '@/main/factories/controllers/project';
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const projectRoutes = () => {
    router.get('/project/', isLoggedInMiddleware, permissionsMiddleware(["Professor", "Coordenação"]), getProjectController);
    router.get('/project/:id', isLoggedInMiddleware, permissionsMiddleware(["Professor", "Coordenação"]), showProjectController);
    router.post('/project/', isLoggedInMiddleware, permissionsMiddleware(["Professor", "Orientando"]), insertProjectController);
    router.put('/project/:id', isLoggedInMiddleware, permissionsMiddleware(["Professor", "Orientando"]), updateProjectController);
    router.delete('/project/:id', isLoggedInMiddleware, permissionsMiddleware(["Professor", "Coordenação"]), deleteProjectController);
}