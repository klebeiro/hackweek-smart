import { UserRepository } from "@/infra/database/repositories/user";
import { User, createUser } from "@/domain/types/user";
import { encrypt } from "@/infra/utils/bcrypt";
import { sendEmailConfirmation, MailOptions } from "@/infra/utils/node-mailer";
import { generateEmailVerificationToken } from "@/infra/utils/uuid";
import { ForbiddenError } from "@/application/helpers/errors/http";

export type InsertUser = (data: createUser) => Promise<{user: User} | null>

export const insertUser = (userRepo: UserRepository) => async (data: createUser): Promise<{user: User} | null> => {
    const generatedToken = generateEmailVerificationToken();
    const passwordHash = await encrypt(data.password)
    let typeUser
    if(data.email.split('@')[1] === "crateus.ufc.br") {
        typeUser = 2
    } else if(data.email.split('@')[1] === "alu.ufc.br") {
        typeUser = 1
    } else {
        throw new Error("Invalid Email")
    }
    const user = await userRepo.insert(Object.assign(data, {password: passwordHash}, { token: generatedToken}, { type: { id: typeUser } }));
    console.log(user);
    if (user !== null) {
        const subject = "Confirme seu email"
        const text = `<!DOCTYPE><html lang="pt-br"><body>Para validar seu email clique aqui: http://localhost:3000/verify-email/${generatedToken}</body></html>`
        sendEmailConfirmation(new MailOptions(user.email, subject, text))
        return {user}
    }
    throw new ForbiddenError();
}