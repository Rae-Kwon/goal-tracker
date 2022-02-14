// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Create Goal
// @route POST /api/goals
// @access Private
const createGoal = (req, res) => {
    res.status(200).json({ message: 'Create goal' })
}

// @desc Update Goal
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc Delete Goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}


module.exports = { 
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}
