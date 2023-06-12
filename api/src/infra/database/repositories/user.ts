import { User, createUser, updateUser } from "@/domain/types/user";
import { User as UserEntity } from "@/infra/database/entities/user.entity";
import { DataSource, Repository } from "typeorm";



export class UserRepository {
    private repo: Repository<UserEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(UserEntity)
    }
    public async get(){
        const users = await this.repo.find({select: ['id', 'name', 'email', 'isVerified', 'createdAt', 'updatedAt']});
        return users
    }

    public async getById(id:number){
        const user = await this.repo.findOne({select: ['id', 'name', 'email', 'isVerified', 'createdAt', 'updatedAt'], where: {id}, relations: ['type', 'projectsOrientador', 'projectsOrientador.orientando', 'projectsCoorientador', 'projectsCoorientador.orientando', 'projectOrientando'] });
        return user
    }

    public async getByToken(token:string){
        const user = await this.repo.findOne({select: ['id', 'name', 'email', 'token', 'createdAt', 'updatedAt'], where: {token}, relations: ['type'] });
        return user
    }

    public async getByEmail(email: string){
        const user = await this.repo.findOne({select: ['id', 'name', 'email', 'createdAt', 'isVerified', 'updatedAt', 'password'], where: {email}, relations: ['type'] });
        return user
    }

    public async insert(data: createUser){
        const {id} = await this.repo.save(data);
        return this.repo.findOne({select: ['id', 'name', 'email', 'createdAt', 'updatedAt'], where: {id}, relations: ['type'] })
    }

    public async update(data: updateUser){
        const {id} = await this.repo.save(data);
        return this.repo.findOne({select: ['id', 'name', 'email', 'isVerified', 'createdAt', 'updatedAt'], where: {id}, relations: ['type'] })
    }

    public async delete(id: number){
        return this.repo.delete({id});
    }
}