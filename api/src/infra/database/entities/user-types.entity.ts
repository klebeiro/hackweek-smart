import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm"
import { User } from "."

@Entity({name: 'user_types'})
export class UserTypes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string
    
    @OneToMany(() => User, (user) => user.type)
    users: User[]
    
}