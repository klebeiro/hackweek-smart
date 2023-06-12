import { Meeting, Period, Project } from "."

export type Goal = {
    id: number
    project: Project
    startsAt: Date | string
    endsAt: Date | string
    finishedAt?: Date | string
    expectedAt: Date | string
    createdAt: Date | string
    updatedAt: Date | string
    meeting?: Meeting
    period: Period
}

export type createGoal = Omit<Goal, 'id' | 'updatedAt' | 'createdAt'>
export type updateGoal = Omit<Goal, 'updatedAt' | 'createdAt'>

