import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Goal, Meeting, Project } from "."

@Entity({name: 'periods'})
export class Period {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    period: string

    @Column({name: 'starts_at'})
    startsAt: Date

    @Column({name: 'ends_at'})
    endsAt: Date
    
    @OneToMany(() => Meeting, (meeting) => meeting.period)
    meetings: Meeting[]

    @OneToMany(() => Goal, (goals) => goals.period)
    goals: Goal[]

    @ManyToMany(() => Project)
    @JoinTable({
        name: 'projects_periods',
        joinColumn: {
            name: "id_period",
            referencedColumnName: "id"
            
        },
        inverseJoinColumn: {
            name: "id_project",
            referencedColumnName: "id"
        }
    })
    projects: Project[]

    
}