import { Goal, Meeting, Project } from "."

export type Period = {
    id: number
    period?: string
    startsAt?: Date | string
    endsAt?: Date | string
    meetings?: Meeting[]
    goals?: Goal[]
    projects?: Project[]
}

export type createPeriod = Omit<Period, 'id' | 'meetings' | 'goals' | 'work'>
export type updatePeriod = Omit<Period, 'meetings' | 'goals' | 'work'>