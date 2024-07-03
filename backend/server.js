const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');
const workouteRoutes = require('./routes/workouts');
const peeps = require('./routes/peeps');
console.log(peeps)

const app = express()
app.use(express.json())

app.use((req, res, next) => { 
    console.log(req.path, req.method)
    next()
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`listening on this link ${process.env.MONGO_URI}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);  
    });
app.use('/api/workouts', workouteRoutes)
app.use('/api/peeps',peeps)
