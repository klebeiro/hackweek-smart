import { Project } from "."

export type Avaliation = {
    id: number
    avaliation: string
    grade: string
    project: Project
    createdAt: Date | string
    updatedAt: Date | string
}

export type createAvaliation = Omit<Avaliation, 'id' | 'updatedAt' | 'createdAt'>
export type updateAvaliation = Omit<Avaliation, 'updatedAt' | 'createdAt'>

