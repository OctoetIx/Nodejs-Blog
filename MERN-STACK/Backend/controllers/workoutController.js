const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET all workout
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
// GET single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

// CREATE a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneDelete({_id: id})
    if (!workout) {
        res.status(404).json({error : 'No such workout'})
    }
    res.status(200).json(workout)
}

// UPDATE a workout 
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if (mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})
    if (!workout) {
        res.status(404).json({error : 'No such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout}