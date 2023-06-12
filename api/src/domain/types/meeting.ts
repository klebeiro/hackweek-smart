import { Period, Project } from "."

export type Meeting = {
    id: number
    local: string
    observations?: string
    reason?: string
    meetingDetails: string
    confirmedOrientador?: boolean
    confirmedCoorientador?: boolean
    confirmedOrientando?: boolean
    startsAt: Date | string
    project: Project
    period: Period
    createdAt: Date | string
    updatedAt: Date | string
}

export type createMeeting = Omit<Meeting, 'id' | 'updatedAt' | 'createdAt' | 'confirmedOrientador' | 'confirmedCoorientador' | 'confirmedOrientando'>
export type updateMeeting = Omit<Meeting, 'startsAt' | 'updatedAt' | 'createdAt'>

