import {router} from '@/main/config/router';
import { getMeetingController, insertMeetingController, showMeetingController, updateMeetingController, deleteMeetingController } from '@/main/factories/controllers/meeting';
import { isLoggedInMiddleware, permissionsMiddleware  } from "@/main/factories/middlewares";

export const meetingRoutes = () => {
    router.get('/meeting/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), getMeetingController);
    router.get('/meeting/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor", "Coordenação"]), showMeetingController);
    router.post('/meeting/', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor"]), insertMeetingController);
    router.put('/meeting/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor"]), updateMeetingController);
    router.delete('/meeting/:id', isLoggedInMiddleware, permissionsMiddleware(["Orientando", "Professor"]), deleteMeetingController);
}