import { router } from '@/main/config/router';
import { verifyTokenController } from '@/main/factories/controllers/verify-token';


export const verifyTokenRoutes = () => {
    router.post('/verify-token/', verifyTokenController);
}