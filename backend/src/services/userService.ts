import mysql from 'mysql2';
const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root", // Default username and password. root:root, highly advisable to change this if using.
    database: "CostaLingua"
}).promise()

export async function addUser(username : string, hash : string) : Promise<any> {
    let result = con.query("INSERT INTO Profile (username, password) VALUES (?,?)", [username, hash]);
    return result
}