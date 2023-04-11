const Task = require('../models/taskModel')
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})
    res.status(200).json(tasks)
}

const getSingleTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such task' })
    }

    const task = await Task.findById(id)

    if (!task) {
        return res.status(404).json({ error: 'No such task' })
    }

    res.status(200).json(task)
}

const createTask = async (req, res) => {
    const { title, desc } = req.body
    
    try {
        const task = await Task.create({ title, desc })
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({ mssg: error.message })
    }
} 

const deleteTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such task' })
    }

    const task = await Task.findByIdAndDelete(id)

    if (!task) {
        return res.status(404).json({ error: 'No such task' })
    }

    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such task' })
    }

    const task = await Task.findByIdAndUpdate(id, {
        ...req.body
    })

    if (!task) {
        return res.status(404).json({ error: 'No such task' })
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
}