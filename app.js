import express from "express"
import bodyParser from "body-parser"
import apiRouter from "./apiRouter.js"
import url from 'url'
import path from "path"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.resolve()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'))
})

export default app