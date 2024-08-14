const Todos = require("../models/todo.model")


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
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json({ message: "Error Fetching Todo" });
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

module.exports = {
    createTodo,
    readTodos,
    updateTodo,
    deleteTodo
}