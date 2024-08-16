const express = require('express')

const { createTodoItem } = require("../controllers/todoItems.controller")
const router = express.Router()

router.post('/:category/create-todo-item', createTodoItem)

module.exports = {
    router
}