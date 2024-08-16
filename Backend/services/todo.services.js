const Todos = require("../models/todo.model")
const TodoItems = require("../models/todoItems.model")

const getTodoCategoryById = async (todoId) => {
    try {
        const response = await Todos.findById(todoId).populate(['createdBy' , 'todoList'])
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createTodoCategoryItem = async(data)=>{
    try{
        const newTodoItem = new TodoItems({
            ...data
        })
        const response = await newTodoItem.save()
    
        return response
    }
    catch(error){
        console.log(error);
        throw error
    }
}

const deleteTodoItems = async(id) =>{
    try {
        const response = await TodoItems.findByIdAndDelete(id)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}
module.exports = {
    getTodoCategoryById,
    createTodoCategoryItem,
    deleteTodoItems
}