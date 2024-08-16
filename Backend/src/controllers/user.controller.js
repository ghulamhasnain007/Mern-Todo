const { config } = require("../config/server.config")
const Users = require("../models/user.model")
const { findEmail, saveUser, saveToken } = require("../services/user.services")
const { createHash, compareHash } = require("../utils/hash.utils")
const jwt = require('jsonwebtoken')

const createUser = async(req, res) =>{
    try{
        const {fullName, email, password} = req.body
    
        const user = await findEmail(email)
        if(user){
            return res.json({message: "Email Already Exist"})
        }
        const hashedPassword = await createHash(password)

        const payload = {
            fullName,
            email,
            // password
            password: hashedPassword
        }

        const newUser = await saveUser(payload)
        if(!newUser){
            return res.status(500).json({message: "There is something Wrong"})
        }
    
        return res.status(200).json({message: "User Created Successfully"})
    }
    catch(error){
        return res.status(500).json({message: "There is something Wrong"})
    }
}

// const loginUser = async(req, res)=>{
//     try{
//         const {email, password} = req.body
//         const user = await findEmail(email)
//         if(!user){
//             return res.status(404).json({message: "Invalid Credientials"})
//         }
//         const passwordMatch = await compareHash(password, user.password)

//         if(!passwordMatch){
//             return res.status(404).json({message: "Invalid Credientials"})
//         }
//         const token = jwt.sign({email: user.email, fullName: user.fullName}, config.secretKey, {expiresIn: '1h'})

//         const generateToken = await saveToken({token, user: user.id})
//         return res.status(200).json({success: true, message: "User login Successfully", data: { token: generateToken.token, user: user }})
//     }
//     catch(error){
//         return res.status(500).json({success: false, message: "There is something wrong"})
//     }
// }
const loginUser = async(req, res) => {
    try {
      const { email, password } = req.body;
      const user = await findEmail(email);
      if (!user) {
        return res.status(404).json({ message: "Invalid Credentials" });
      }
  
      const passwordMatch = await compareHash(password, user.password);
      if (!passwordMatch) {
        return res.status(404).json({ message: "Invalid Credentials" });
      }
  
      const token = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, config.secretKey, { expiresIn: '1h' });
      // await saveToken({ token, user: user.id });
  
      return res.status(200).json({ success: true, message: "User login Successfully", data: { token, user } });
    } catch (error) {
      return res.status(500).json({ success: false, message: "There is something wrong" });
    }
  };

module.exports = {
    createUser,
    loginUser
}
