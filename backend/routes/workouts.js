const express = require('express');
// require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config();
const Workout = require('../models/WorkoutModel');
const {  createWorkout,getWorkouts, getWorkout ,deleteWorkout,updateWorkout} = require('../controllers/workoutController');
const router = express.Router();

// Get all workouts
router.get('/',getWorkouts)

// Get a single workout
router.get('/:id',getWorkout)

router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Edit a workout
router.patch('/:id', updateWorkout);
// mongoose.connect(process.env.MONGO_URI);
module.exports = router;
