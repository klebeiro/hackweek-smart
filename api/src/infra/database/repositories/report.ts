import { IsNull, Not } from "typeorm";
import { appDataSource } from "../data-source";
import { Goal, Project, Meeting } from "../entities";


function calculateAverage(data: number[], divisor: number){
    if(!data.length) {
        throw new Error("No data")
    }
    const total = data.reduce((total, current) => total + current)
    return total / divisor
}

export async function report(){
    const goalsRepo = appDataSource.getRepository(Goal)
    const projectRepo = appDataSource.getRepository(Project)
    const meetingRepo = appDataSource.getRepository(Meeting)

    const goals = await goalsRepo.find()
    const projects = await projectRepo.find({relations: ['periods']})
    const meetings = await meetingRepo.find()

    let projectsTerminateCount = 0
    let orientandoTerminateWork = 0
    let periodsProjectsTerminteCount = 0
    // Periodos para terminar o projeto
    projects.forEach(project => {
        if (project.terminate) periodsProjectsTerminteCount+= project.periods.length
    })

    // Projetos completados
    projects.forEach(project => {
        if (project.terminate) projectsTerminateCount+= 1
    })

    // Projetos completados enquanto o discente trabalhava
    projects.forEach(project => {
        if (project.terminate && project.terminateWork) orientandoTerminateWork+= 1
    })

    const goalsCount = goals.length
    const projectCount = projects.length

    // Metas completadas 
    const goalsCompletes: any[] = []

    goals.forEach(goal => {
        if (goal.finishedAt !== null) goalsCompletes.push(goal)
    } )

    // Metas completadas dentro do tempo
    const goalsCompletesOnTime: any[] = []
    goals.forEach(goal => {
        if (goal.finishedAt !== null && new Date(goal.finishedAt).getTime() <= new Date(goal.endsAt).getTime()){
            goalsCompletesOnTime.push(goal)
        }
    })

    // Metas completadas fora do tempo
    const goalsCompletesOutTime: any[] = []
    goals.forEach(goal => {
        if (goal.finishedAt !== null && new Date(goal.finishedAt).getTime() > new Date(goal.endsAt).getTime()){
            goalsCompletesOutTime.push(new Date(goal.finishedAt).getTime() - new Date(goal.endsAt).getTime())
        }
    })

    // Quantidade de reuniões canceladas
    let meetingsCanceled = 0
    let meetingsPerform = 0

    meetings.forEach(meeting => {
        if (meeting.reason !== null) meetingsCanceled += 1
        else meetingsPerform += 1
    })
    
    return {
        // Porcentagem de metas completadas
        goalsCompletes: goalsCompletes.length / goalsCount,
        // Porcentagem de metas completadas no prazo
        goalsCompletesOnTime: goalsCompletesOnTime.length / goalsCount,
        // Porcentagem de metas completadas fora do prazo
        goalsCompletesOutTime: goalsCompletesOutTime.length / goalsCount,
        // Média de atraso de metas em dias
        goalsCompletesOutTimeAverageinDays: Math.floor(calculateAverage(goalsCompletesOutTime, 86400000)),
        // Média de períodos para completar o projeto
        periodsToTerminateAverage: periodsProjectsTerminteCount / projectCount,
        // Porcentagem de alunos que terminaram o projeto enquanto trabalhavam
        finishedWhileWork: isNaN((orientandoTerminateWork / projectsTerminateCount))? 0 : (orientandoTerminateWork / projectsTerminateCount),
        //Porcentagem de reuniões canceladas
        meetingsCanceled: meetingsCanceled / meetings.length,
        //Porcentagem de reuniões realizadas
        meetingsPerform: meetingsPerform / meetings.length
    }
}