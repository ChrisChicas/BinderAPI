// DEPENDENCIES
import express from 'express';
const app = express();
import cors from "cors";

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Welcome to Binder App'
    })
})

// LOGIN
app.post('/login', (req: express.Request, res: express.Response) => {
    // inputUserName, inputPassword
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

// CONTROLLERS 
import notesController from '../controllers/notes_controller';
app.use('/notes', notesController)

import userbindersController from '../controllers/userbinders_controller';
app.use('/userbinders', userbindersController)

import usertableController from '../controllers/usertable_controller';
app.use('/usertables', usertableController)
