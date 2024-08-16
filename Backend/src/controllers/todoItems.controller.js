const TodoItems = require('../models/todoItems.model');
const Todos = require('../models/todo.model');

const createTodoItem = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { category } = req.params;

        // Step 1: Create a new todoItem
        const newTodoItem = new TodoItems({
            title,
            description,
            category
        });

        const savedTodoItem = await newTodoItem.save();

        // Step 2: Update the Todos document by adding the new todoItem's _id to the todoList
        await Todos.findByIdAndUpdate(category, {
            $push: { todoList: savedTodoItem._id }
        });

        return res.status(200).json({ 
            message: 'New Todo Item Created Successfully and Added to TodoList', 
            data: savedTodoItem 
        });
    } catch (error) {
        console.error('Error creating todo item:', error);
        return res.status(500).json({ message: 'Failed to create todo item', error: error.message });
    }
};

module.exports = {
    createTodoItem
};
