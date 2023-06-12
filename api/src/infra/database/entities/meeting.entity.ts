import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Goal, Period, Project } from "."

@Entity({name: 'meetings'})
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'starts_at'})
    startsAt: Date

    @Column()
    local: string

    @Column({nullable: true})
    observations: string

    @Column({nullable: true})
    reason: string

    @Column({name: 'meeting_details'})
    meetingDetails: string

    @Column({name: 'is_confirmed_orientando', nullable: true})
    confirmedOrientando: boolean

    @Column({name: 'is_confirmed_orientador', nullable: true})
    confirmedOrientador: boolean

    @Column({name: 'is_confirmed_coorientador', nullable: true})
    confirmedCoorientador: boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
    
    @ManyToOne(() => Project, (project) => project.meetings)
    @JoinColumn({name: 'id_project', referencedColumnName: 'id'})
    project: Project
    
    @ManyToOne(() => Period, (period) => period.meetings)
    @JoinColumn({name: 'id_period', referencedColumnName: 'id'})
    period: Period

    @OneToMany(() => Goal, (goals) => goals.meeting)
    goals: Goal[]
}