const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    }
},{timestamps: true})

const Token = mongoose.model('tokens', tokenSchema)

module.exports = Token