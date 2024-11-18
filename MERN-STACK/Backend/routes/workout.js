const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = require('express').Router();


// Get all workouts
router.get('/', getWorkouts )

// GET a single workout
router.get('/:id', getWorkout)
// POST a workout
router.post('/', createWorkout)
// DELETE a single workout
router.delete('/:id', deleteWorkout)
// UPDATE a single workout
router.patch('/:id', updateWorkout)




module.exports = router