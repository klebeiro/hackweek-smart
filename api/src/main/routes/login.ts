import {router} from '@/main/config/router';
import { loginController } from '@/main/factories/controllers/login';


export const loginRoutes = () => {
    router.post('/login/', loginController);
}