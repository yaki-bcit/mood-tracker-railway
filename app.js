import express from "express"
import bodyParser from "body-parser"
import apiRouter from "./apiRouter.js"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

export default app