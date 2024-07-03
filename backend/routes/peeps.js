const express = require('express');
// require('dotenv').config();

const dotenv=require('dotenv')
dotenv.config(); 

const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    
    res.json({ mssg: 'get modefied peeps' });
});

// Get a single workout
router.get('/:id', (req, res) => {
  
    res.json({ mssg: `you have entered the Id of the peeps ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.json({ mssg: 'new peeps' });
});

// Delete a workout
router.delete('/:id', (req, res) => {
    
    res.json({ mssg: 'delete peep' });
});

// Edit a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'edit peep' });
});
// mongoose.connect(process.env.MONGO_URI);
module.exports = router;
