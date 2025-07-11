import express from 'express'
import cors from 'cors'
import { hashPassword } from './services/auth'
import { addUser } from './services/userService'

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', // Change URL here to your own domain, if deploying this server
    optionsSuccessStatus: 200
}
const port = 3000

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = await hashPassword(req.body.password)
    const userresult = await addUser(username, password)
    res.send(userresult)
})


app.listen(port, () => {
    console.log(`CostaLingua backend server is now listening in port ${port}`)
})
