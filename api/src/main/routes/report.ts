import { report } from '@/infra/database/repositories/report';
import {router} from '@/main/config/router';
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";


export const reportRoutes = () => {
    router.get('/report/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), async (req, res) => {
        const data = await report()
        res.json({data})
    });
}