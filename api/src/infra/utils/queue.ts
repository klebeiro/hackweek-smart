import Queue from 'bull';
import {env} from '@/main/config/env';

import {notifyJob} from '@/infra/jobs';

export const notifyQueue = new Queue(notifyJob.key, {redis: {port: env.portRedis, host: env.hostRedis}})
