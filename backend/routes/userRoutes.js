const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMyUser } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMyUser)

module.exports = router
