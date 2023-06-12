import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { UserTypes, Project } from "."

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    token?: string

    @Column({name: "is_verified", default: false})
    isVerified: boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => UserTypes, (userTypes) => userTypes.users)
    @JoinColumn({name: 'type', referencedColumnName: 'id'})
    type: UserTypes

    @OneToMany(() => Project, (project) => project.orientador)
    projectsOrientador: Project[]

    @OneToMany(() => Project, (project) => project.coorientador)
    projectsCoorientador: Project[]

    @OneToOne(() => Project, (project) => project.orientando)
    projectOrientando: Project
}