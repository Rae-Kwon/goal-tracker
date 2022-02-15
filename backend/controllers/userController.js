// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.status(200).json({ message: 'register user' })
}

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.status(200).json({ message: 'login user' })
}

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMyUser = (req, res) => {
    res.status(200).json({ message: 'Get me' })
}

module.exports = {
    registerUser,
    loginUser,
    getMyUser
}
