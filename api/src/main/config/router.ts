import {Router} from 'express';

import { userRoutes, periodRoutes, avaliationRoutes, goalRoutes, meetingRoutes, verifyTokenRoutes, loginRoutes, projectRoutes, reportRoutes } from '@/main/routes';
export const router = Router();

userRoutes();
loginRoutes();
verifyTokenRoutes();
projectRoutes();
meetingRoutes()
goalRoutes()
avaliationRoutes()
periodRoutes()
reportRoutes()