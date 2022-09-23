import express from "express"

import * as dbModel from './dbAccessLayer.js';

const apiRouter = express.Router()

apiRouter.get('/moods', async (req, res) => {
    const moods = await dbModel.getMoods()
    res.send(moods)
})

apiRouter.post('/moods', async (req, res) => {
    const mood = req.body
    const moods = await dbModel.addMood(mood)
    res.send(moods)
})

apiRouter.delete('/moods/:id', async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const moods = await dbModel.deleteMood(id)
    res.send(moods)
})

apiRouter.put('/moods/:id', async (req, res) => {
    const mood = req.body
    const moods = await dbModel.updateMood(mood)
    res.send(moods)
})

export default apiRouter