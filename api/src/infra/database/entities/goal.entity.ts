import { Entity, PrimaryGeneratedColumn, OneToOne, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Meeting, Period, Project, User } from "."

@Entity({name: 'goals'})
export class Goal {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Project, (project) => project.goals)
    @JoinColumn({name: 'id_project', referencedColumnName: 'id'})
    project: Project

    @CreateDateColumn({name: 'starts_at'})
    startsAt: Date

    @CreateDateColumn({name: 'ends_at'})
    endsAt: Date

    @CreateDateColumn({name: 'finished_at'})
    finishedAt: Date

    @CreateDateColumn({name: 'expected_at'})
    expectedAt: Date

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => Meeting, (meeting) => meeting.goals)
    @JoinColumn({name: 'id_meeting_expected', referencedColumnName: 'id'})
    meeting: Meeting

    @ManyToOne(() => Period, (period) => period.goals)
    @JoinColumn({name: 'id_period', referencedColumnName: 'id'})
    period: Period
}