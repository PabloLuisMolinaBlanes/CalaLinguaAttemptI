import express from 'express'
import cors from 'cors'
import { hashPassword, comparePasswords, makeId, addUserSession } from './services/auth'
import { addUser, getUserPasswordHash } from './services/userService'
import { readAllQuestions, readAllTypes } from './services/questionsService'

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', // Change URL here to your own domain, if deploying this server
    optionsSuccessStatus: 200
}
const port = 3000

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/getQuestionnaires', async (req, res) => {
    res.send(await readAllQuestions())
})

app.get('/getTypes', async (req, res) => {
    res.send(await readAllTypes())
})

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = await hashPassword(req.body.password)
    const userresult = await addUser(username, password)
    res.send("Done! Please, return to the main screen and log in")
})

app.post("/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const passwordHashRows = await getUserPasswordHash(username)
    if (passwordHashRows[0].length > 0) {
        const passwordHash = passwordHashRows[0][0].password
        const result = await comparePasswords(password, passwordHash)
        if (result) {
            const id = makeId(20)
            addUserSession(username, password)
            res.send(id)
        }
    }
    res.send("Incorrect username/password!");
})


app.listen(port, () => {
    console.log(`CostaLingua backend server is now listening in port ${port}`)
})
