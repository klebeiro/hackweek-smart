import 'dotenv/config'
import './config/module-alias'

import { notifyQueue } from "@/infra/utils/queue";
import { notifyJob } from "@/infra/jobs";

notifyQueue.process(notifyJob.handle)