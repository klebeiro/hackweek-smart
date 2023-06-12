import { Meeting, createMeeting, updateMeeting } from "@/domain/types/meeting";
import { Meeting as MeetingEntity } from "@/infra/database/entities/meeting.entity";
import { DataSource, QueryFailedError, Repository } from "typeorm";



export class MeetingRepository {
    private repo: Repository<MeetingEntity>
    public constructor(appDataSource: DataSource){
        this.repo = appDataSource.getRepository(MeetingEntity)
    }
    public async get(){
        const meetings = await this.repo.find({select: ['id', 'local', 'startsAt', 'meetingDetails', 'observations', 'reason', 'createdAt', 'updatedAt', 'confirmedCoorientador', 'confirmedOrientador', 'confirmedOrientando'], relations: ['project', 'period']});
        return meetings
    }

    public async getById(id:number){
        const meetings = await this.repo.findOne({select: ['id', 'local', 'startsAt', 'meetingDetails', 'observations', 'reason', 'createdAt', 'updatedAt', 'confirmedCoorientador', 'confirmedOrientador', 'confirmedOrientando'], where: {id}, relations: ['project', 'period']});
        return meetings
    }

    public async insert(data: createMeeting){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'local', 'startsAt', 'meetingDetails', 'observations', 'reason', 'createdAt', 'updatedAt', 'confirmedCoorientador', 'confirmedOrientador', 'confirmedOrientando'], where: {id}, relations: ['project', 'project.orientador', 'project.orientando', 'project.coorientador', 'period']})
        }catch(e: unknown){
            
            if (e instanceof QueryFailedError)throw new Error(e.message)
            throw new Error('error')
            
        }
    }

    public async update(data: updateMeeting){
        try {
            const {id} = await this.repo.save(data);
            return this.repo.findOne({select: ['id', 'local', 'startsAt', 'meetingDetails', 'observations', 'reason', 'createdAt', 'updatedAt', 'confirmedCoorientador', 'confirmedOrientador', 'confirmedOrientando'], where: {id}, relations: ['project', 'period']})
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