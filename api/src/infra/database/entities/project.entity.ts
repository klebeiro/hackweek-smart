import { Entity, PrimaryGeneratedColumn, OneToOne, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Meeting, User, Goal, Avaliation, Period } from "."

@Entity({name: 'projects'})
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({name: 'is_terminate'})
    terminate: boolean

    @Column({name: 'is_orientando_work'})
    terminateWork: boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.projectsOrientador)
    @JoinColumn({name: 'id_orientador', referencedColumnName: 'id'})
    orientador: User

    @OneToOne(() => User, (user) => user.projectOrientando)
    @JoinColumn({name: 'id_orientando', referencedColumnName: 'id'})
    orientando: User

    @ManyToOne(() => User, (user) => user.projectsCoorientador)
    @JoinColumn({name: 'id_coorientador', referencedColumnName: 'id'})
    coorientador: User

    @OneToOne(() => Meeting, (meeting) => meeting.project)
    meetings: Meeting[]

    @OneToMany(() => Avaliation, (avaliation) => avaliation.project)
    avaliations: Avaliation[]

    @OneToMany(() => Goal, (goal) => goal.project)
    goals: Goal[]

    @ManyToMany(() => Period)
    @JoinTable({
        name: 'projects_periods',
        joinColumn: {
            name: "id_project",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "id_period",
            referencedColumnName: "id"
        }
    })
    periods: Period[]
}