import bcrypt from 'bcrypt';

const sessions_users = []

export async function hashPassword(password : string) : Promise<string> {
    return await bcrypt.hash(password, 10)
}

export async function comparePasswords(password : string, passwordHash : string) : Promise<boolean> {
    return bcrypt.compare(password, passwordHash)
}

export function addUserSession(username: string, session_id: string) : void {
    sessions_users.push({"username": username, "session_id": session_id});
}

export function makeId(length : number) : string {
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


