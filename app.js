import express from "express"
import bodyParser from "body-parser"
import apiRouter from "./apiRouter.js"
import favicon from 'serve-favicon'
import url from 'url'
import path from "path"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.resolve()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static('dist'))
app.use(favicon(path.join(__dirname, 'dist', 'face-smile-regular.svg')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'))
})

export default app