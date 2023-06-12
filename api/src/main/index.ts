import './config/module-alias'
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import {env} from '@/main/config/env';
import { router } from '@/main/config/router';
import cors from 'cors';

const app = express();
app.use(cors({
	origin: '*'
}))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: '*'
}));

app.use('/api', router);

app.listen(env.port, ()=>console.log(`Server running on: http://localhost:${env.port}`))