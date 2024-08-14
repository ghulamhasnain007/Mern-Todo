const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
},{timestamps: true})

const Todos = mongoose.model('todos', todoSchema)

module.exports = Todos