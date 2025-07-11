import bcrypt from 'bcrypt';

const sessions_users = []

export async function hashPassword(password : string) : Promise<string> {
    return await bcrypt.hash(password, 10)
}

function makeId(length : number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength))
        counter = counter+1
    }
    return result;
}


