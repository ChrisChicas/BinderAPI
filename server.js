// CONTROLLERS 
const notesController = require('./controllers/notes_controller')
app.use('/notes', notesController)

const userbindersController = require('./controllers/userbinders_controller')
app.use('/userbinders', userbindersController)

const usertableController = require('./controllers/usertable_controller')
app.use('/usertable', usertableController)
