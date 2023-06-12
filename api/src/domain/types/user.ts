import { UserTypes } from "."

export type User = {
    id: number
    name: string
    email: string
    password: string
    type: UserTypes
    createdAt: Date | string
    updatedAt: Date | string
    token?: string
    isVerified: boolean
}

export type createUser = Omit<User, 'id' | 'type' | 'updatedAt' | 'createdAt' | 'isVerified'| 'token'>
export type updateUser = Omit<User, 'updatedAt' | 'type' | 'createdAt' | 'token' | 'isVerified'>

