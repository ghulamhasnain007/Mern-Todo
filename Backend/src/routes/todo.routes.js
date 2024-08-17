const express = require('express')
const { createTodo, readTodos, updateTodo, deleteTodo, createTodoListItems, getAllItems, deleteTodoItem, updateTodoItem } = require('../controllers/todo.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()

// router.post('/create-todo', authMiddleware, createTodo)
// router.get('/', authMiddleware, readTodos)
// router.put('/update-todo/:id',authMiddleware, updateTodo)
// router.delete('/deleteTodo/:id',authMiddleware, deleteTodo)

// router.post('/list-item/:todoId/create',authMiddleware, createTodoListItems)
// router.get('/list-item/:todoId/',authMiddleware, getAllItems)
// router.delete('/list-item/:todoId/delete/:id',authMiddleware, deleteTodoItem)
// router.put('/list-item/:todoId/update/:itemId',authMiddleware, updateTodoItem)

router.post('/create-todo', createTodo)
router.get('/', readTodos)
router.put('/update-todo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

router.post('/list-item/:todoId/create', createTodoListItems)
router.get('/list-item/:todoId/', getAllItems)
router.delete('/list-item/:todoId/delete/:id', deleteTodoItem)
router.put('/list-item/:todoId/update/:itemId', updateTodoItem)

module.exports = {
    router
}