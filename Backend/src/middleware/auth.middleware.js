const jwt = require('jsonwebtoken');
const { config } = require('../config/server.config');
const Users = require('../models/user.model');


// const authMiddleware = async (req, res, next) => {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) {
//     return res.status(401).send({ error: 'Authorization header missing' });
//   }

//   const token = authHeader.replace('Bearer ', '');
//   try {
//     const decoded = jwt.verify(token, config.secretKey);
//     const user = await Users.findById(decoded._id);
//     if (!user) {
//       throw new Error('User not found');
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Please authenticate' });
//   }
// };


const authMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).send({ error: 'Authorization header missing' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log("Token:", token); // Check the token being sent

  try {
    const decoded = jwt.verify(token, config.secretKey);
    // console.log("Decoded JWT:", decoded); // Inspect the decoded token
    const user = await Users.findById(decoded._id);
    // console.log("Authenticated User:", user); // Verify if the user is being found
    if (!user) {
      throw new Error('User not found');
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Error:", error.message); // Log the error message
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = authMiddleware;