import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { Project } from "."

@Entity({name: 'avaliations'})
export class Avaliation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    avaliation: string

    @Column()
    grade: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => Project, (project) => project.avaliations)
    @JoinColumn({name: 'id_project', referencedColumnName: 'id'})
    project: Project
}