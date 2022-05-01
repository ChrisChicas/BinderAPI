// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const notes = require('./controllers/notes_controller')
const userbinders = require('./controllers/userbinders_controller')
const usertable = require('./controllers/usertable_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const user = "postgres";
const host = "localhost";
const database = "binder_api";
const port = "5432";
const pass = "password";


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Binder App'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})


// CONTROLLERS 
const notesController = require('./controllers/notes_controller')
app.use('/notes', notesController)

const userbindersController = require('./controllers/userbinders_controller')
app.use('/userbinders', userbindersController)

const usertableController = require('./controllers/usertable_controller')
app.use('/usertable', usertableController)
