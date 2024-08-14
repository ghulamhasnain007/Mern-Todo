const Token = require("../models/token.model")
const Users = require("../models/user.model")

const findEmail = async(email) => {
    try {
        const user = await Users.findOne({email: email})
        return user
    } catch (error) {
        throw error
    }
}

const saveUser = async(payload) => {
    const newUser = new Users({...payload})
    const user = await newUser.save()
    return user
}

// const saveToken = async(payload)=>{
//     try{
//         const newToken = new Token({...payload})
//         const token = newToken.save()
//         return token
//     }
//     catch(error){
//         throw error
//     }
// }
module.exports = {
    findEmail,
    saveUser,
    // saveToken
}