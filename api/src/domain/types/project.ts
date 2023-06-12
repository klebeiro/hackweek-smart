import { Period, User } from "."

export type Project = {
    id: number
    title?: string
    terminate?: boolean
    terminateWork?: boolean
    orientador?: User
    coorientador?: User
    orientando?: User
    periods?: Period[]
    createdAt?: Date | string
    updatedAt?: Date | string
}

export type createProject = Omit<Project, 'id' | 'updatedAt' | 'createdAt'>
export type updateProject = Omit<Project, 'updatedAt' | 'createdAt'>

