const Todos = require("../models/todo.model")
const TodoItems = require("../models/todoItems.model")
const { getTodoCategoryById, createTodoCategoryItem, deleteTodoItems } = require("../services/todo.services")


const createTodo = async(req, res)=>{
    try{
        const {title, description, createdBy} = req.body
        // const payload = {
        //     title,
        //     description,
        //     isCompleted
        // }
        const newTodo = new Todos({
            title,
            description,
            // isCompleted,
            createdBy
        })
        await newTodo.save()
        return res.status(200).json({ message: "Todo Created Successfully", data: newTodo });
    }
    catch(error){
        return res.status(500).json({ message: "There is Something Wrong" });
    }
}

const readTodos = async (req, res) => {
    try {
        // Fetch todos created by the currently authenticated user
        const todos = await Todos.find({ createdBy: req.user._id }).populate("createdBy", "fullName");
        // const todos = await Todos.find({})
        return res.status(200).json(todos);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error Fetching Todo", error: error.message });
    }
};

const updateTodo = async(req, res)=> {
    try{
        const updatedTodos = await Todos.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        return res.status(200).json({message: "Todo Updated Successfully", data: updatedTodos})
    }
    catch(error){
        return res.status(404).json({message: "Cannot find Todo of that ID"})
    }
}

const deleteTodo = async(req, res) =>{
    try{
        await Todos.findByIdAndDelete(req.params.id)
        return res.status(200).json({message: "Todo Deleted Successfully"})
    }
    catch(error){
        return res.status(404).json({message: 'Unable to find the Todo'})
    }
}

const createTodoListItems = async(req, res) =>{
    const { todoId } = req.params
    const { title, description} = req.body
    const response = await createTodoCategoryItem({
        title: title,
        description: description
    })
    const getTodoId = await getTodoCategoryById(todoId)

    if(!getTodoId)
    {
        return res.status(400).json({message: "Todo Item with that Id not found"})
    }
    getTodoId.todoList.push(response.id)
    await getTodoId.save()
    return res.status(200).json({message: "Todo Item Created Successfully", data: response})
}

const getAllItems = async (req, res) =>{
    try {
        const { todoId } = req.params
        const response = await Todos.findById(todoId).populate(['createdBy' , 'todoList'])
        return res.status(200).json({message: "All Todos", data: response})   
    }
    catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}

const deleteTodoItem = async(req, res) =>{
    try {
        const { id, todoId} = req.params
        // Step 1: Delete the todoItem from the collection
        const response = await deleteTodoItems(id);

        if (!response) {
            return res.status(404).json({ message: 'Todo Item not found' });
        }

        // Step 2: Remove the todoItem's _id from the todoList array in the Todos document
        await Todos.findByIdAndUpdate(todoId, {
            $pull: { todoList: id }
        });

        return res.status(200).json({ message: 'Todo Item Deleted Successfully', data: response });
    } catch (error) {
        console.error('Error deleting todo item:', error);
        return res.status(500).json({ message: 'Failed to delete todo item', error: error.message });
    }
}

const updateTodoItem = async (req, res) => {
    try {
        // console.log('Request Params:', req.params); // Log the request parameters
        // console.log('Request Body:', req.body);     // Log the request body

        // Correctly extract itemId from req.params
        const { itemId } = req.params;
        // console.log("Id: " + itemId);

        const updatedTodoItem = await TodoItems.findByIdAndUpdate(
            itemId,
            req.body,
            { new: true }
        );

        if (!updatedTodoItem) {
            return res.status(404).json({ message: "Cannot find Todo Item with that ID" });
        }

        // console.log('Updated Todo Item:', updatedTodoItem);
        return res.status(200).json({ message: "Todo Item Updated Successfully", data: updatedTodoItem });
    } catch (error) {
        console.error('Error during update:', error);
        return res.status(500).json({ message: "Failed to update Todo Item", error: error.message });
    }
};



module.exports = {
    createTodo,
    readTodos,
    updateTodo,
    deleteTodo,
    createTodoListItems,
    getAllItems,
    deleteTodoItem,
    updateTodoItem
}