import { v4 } from "uuid"

export function generateEmailVerificationToken() {
    return v4();
}