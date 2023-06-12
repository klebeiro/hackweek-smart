import { env } from '@/main/config/env';
import bcrypt from 'bcrypt';

export const encrypt = async (text: string): Promise<string> => await bcrypt.hash(text, bcrypt.genSaltSync(env.salt));
export const compare = async (password: string, hash: string): Promise<boolean> => await bcrypt.compare(password, hash);