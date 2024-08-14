const express = require('express')
const { createTodo, readTodos, updateTodo, deleteTodo } = require('../controllers/todo.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()

router.post('/create-todo', authMiddleware, createTodo)
router.get('/', authMiddleware, readTodos)
router.put('/update-todo/:id', authMiddleware ,updateTodo)
router.delete('/deleteTodo/:id', authMiddleware, deleteTodo)

module.exports = {
    router
}