const mongoose = require('mongoose')

const todoItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // },
    // todoList:[
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'todos'
    //     }
    // ]
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todos'
    }
}, { timestamps: true })

const TodoItems = mongoose.model('todoItems', todoItemSchema)

module.exports = TodoItems