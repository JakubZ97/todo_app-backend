const express = require('express')
const {
    getTasks,
    getSingleTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

const router = express.Router()

router.get('/', getTasks)

router.get('/:id', getSingleTask)

router.post('/', createTask)

router.delete('/:id', deleteTask)

router.patch('/:id', updateTask)

module.exports = router