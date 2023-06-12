import { Period, createPeriod, updatePeriod } from "@/domain/types/period";
import { Period as PeriodEntity } from "@/infra/database/entities/period.entity";
import { DataSource, QueryFailedError, Repository } from "typeorm";



export class PeriodRepository {
    private repo: Repository<PeriodEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(PeriodEntity)
    }
    public async get(){
        const periods = await this.repo.find({select: ['id', 'period', 'startsAt', 'endsAt'], relations: [ 'meetings', 'goals']});
        return periods
    }

    public async getById(id:number){
        try {
            return await this.repo.findOne({select: ['id', 'period', 'startsAt', 'endsAt'], where: {id}, relations: [  'meetings', 'goals'] });
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async insert(data: createPeriod){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'period', 'startsAt', 'endsAt'], where: {id}, relations: [  'meetings', 'goals'] })
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async update(data: updatePeriod){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'period', 'startsAt', 'endsAt'], where: {id}, relations: [  'meetings', 'goals'] })
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async delete(id: number){
        try {
            return this.repo.delete({id});
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }
}