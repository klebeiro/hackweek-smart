import { Goal, createGoal, updateGoal } from "@/domain/types/goal";
import { Goal as GoalEntity } from "@/infra/database/entities/goal.entity";
import { DataSource, Repository } from "typeorm";



export class GoalRepository {
    private repo: Repository<GoalEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(GoalEntity)
    }
    public async get(){
        const Goals = await this.repo.find({select: ['id', 'project', 'startsAt', 'endsAt','finishedAt','expectedAt', 'createdAt', 'updatedAt']});
        return Goals
    }

    public async getById(id:number){
        const Goal = await this.repo.findOne({select: ['id', 'project', 'startsAt', 'endsAt','finishedAt','expectedAt', 'createdAt', 'updatedAt'], where: {id}, relations: ['period', 'meeting', 'project'] });
        return Goal
    }

    public async insert(data: createGoal){
        const {id} = await this.repo.save(data);
        return this.repo.findOne({select: ['id', 'project', 'startsAt', 'endsAt','finishedAt','expectedAt', 'createdAt', 'updatedAt'], where: {id}, relations: ['period', 'meeting', 'project'] })
    }

    public async update(data: updateGoal){
        const {id} = await this.repo.save(data);
        return this.repo.findOne({select: ['id', 'project', 'startsAt', 'endsAt','finishedAt','expectedAt', 'createdAt', 'updatedAt'], where: {id}, relations: ['period', 'meeting', 'project'] })
    }

    public async delete(id: number){
        return this.repo.delete({id});
    }
}