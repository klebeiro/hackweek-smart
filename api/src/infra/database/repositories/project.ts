import { Project, createProject, updateProject } from "@/domain/types/project";
import { Project as ProjectEntity } from "@/infra/database/entities/project.entity";
import { DataSource, QueryFailedError, Repository } from "typeorm";



export class ProjectRepository {
    private repo: Repository<ProjectEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(ProjectEntity)
    }
    public async get(){
        const projects = await this.repo.find({select: ['id', 'title', 'terminateWork', 'terminate', 'createdAt', 'updatedAt'], relations: [ 'orientador', 'orientando', 'coorientador', 'periods']});
        return projects
    }

    public async getById(id:number){
        try {
            return await this.repo.findOne({select: ['id', 'title', 'createdAt', 'updatedAt'], where: {id}, relations: [ 'orientador', 'orientando', 'coorientador'] });
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async insert(data: createProject){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'title', 'createdAt', 'updatedAt'], where: {id}, relations: [ 'orientador', 'orientando', 'coorientador'] })
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async update(data: updateProject){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'title', 'createdAt', 'updatedAt'], where: {id}, relations: [ 'orientador', 'orientando', 'coorientador'] })
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