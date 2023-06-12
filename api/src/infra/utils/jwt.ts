import { JwtPayload, sign, verify } from "jsonwebtoken";

export function generateToken(payload: Object): string {
    return sign(payload, 'testeiy3ebnm', {expiresIn: 1000 * 60 * 0.5});
}

export function validateToken(token: string): {id: number} {
    const payload =  verify(token, 'testeiy3ebnm') as JwtPayload;
    return payload as {id: number}
}