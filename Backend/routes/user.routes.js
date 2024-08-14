const express = require('express')
const { createUser, loginUser } = require('../controllers/user.controller')
// const { router } = require('./todo.routes')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/create-user', createUser)
router.post('/login', loginUser)
router.get('/me', authMiddleware, async (req, res) => {
    res.send(req.user);
  });
module.exports = {
    router
}