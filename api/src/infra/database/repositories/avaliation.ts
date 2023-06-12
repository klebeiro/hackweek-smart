import { Avaliation, createAvaliation, updateAvaliation } from "@/domain/types/avaliation";
import { Avaliation as AvaliationEntity } from "@/infra/database/entities/avaliation.entity";
import { DataSource, QueryFailedError, Repository } from "typeorm";



export class AvaliationRepository {
    private repo: Repository<AvaliationEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(AvaliationEntity)
    }
    public async get(){
        const avaliations = await this.repo.find({select: ['id', 'avaliation', 'grade', 'createdAt', 'updatedAt'], relations: ['project']});
        return avaliations
    }

    public async getById(id:number){
        const avaliations = await this.repo.findOne({select: ['id', 'avaliation', 'grade', 'createdAt', 'updatedAt'], where: {id}, relations: ['project']});
        return avaliations
    }

    public async insert(data: createAvaliation){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'avaliation', 'grade', 'createdAt', 'updatedAt'], where: {id}, relations: ['project']})
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async update(data: updateAvaliation){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'avaliation', 'grade', 'createdAt', 'updatedAt'], where: {id}, relations: ['project']})
        }catch(e: any){
            throw new Error(e)
        }
    }

    public async delete(id: number){
        try {
            return this.repo.delete({id});
        }catch(e: any){
            throw new Error(e)
        }
    }
}