import { PrismaClient, Question } from "../generated/prisma";

const prisma : PrismaClient = new PrismaClient()

export async function readAllQuestions() {
    
    const questionEntities = await prisma.question.findMany({
        include: {
            Type: true
        }
    })
    
    return questionEntities;
}

type TypeType = {id: number, name: string}[]

export async function readAllTypes() : Promise<TypeType> {
    const typeEntitites = await prisma.type.findMany();
    return typeEntitites;
}