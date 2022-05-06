// DEPENDENCIES
const notes = require('express').Router()
const db = require('../models') // with db variable, we can now access each model by using db.ModelName. For instance, db.Notes would acces the Notes model.
const { Notes } = db // this will help us avoid having to specify db each time.
const { Op } = require('sequelize')

// FIND ALL NOTES
notes.get('/', async (req, res) => { // the base path of this controller is '/notes'. A GET in this file '/' is a GET to /notes'.
    try {
        const foundNotes = await Notes.findAll()
        res.status(200).json(foundNotes) // call statement. for this route, we want to get back all notes, so we do not need to pass the method any arguments.
    } catch (error) { // catch statement. 
        res.status(500).json(error) // sending back a JSON response with the error and a status of 500.
    }
})

// FIND ALL NOTES FOR A SPECIFIC USER
notes.get('/binder/:binderId', async (req,res) => { // A GET file '/binder/:binderId' is a GET to /notes.
    try {
        const foundspecificNotes = await Notes.findAll({
            where: { binderId: req.params.binderId } // this object specifies that we want to find a specific note 'where' its binderId is equal to the req.params.binderId.
        })
        res.status(200).json(foundspecificNotes) // send back the foundspecificNotes as a JSON response with a status of 200.
    } catch (error) {
        res.status(500).json(error) // send back a JSON response with the error and a status of 500.
    }
}) // this helps us find a specific note in the binder with a noteId and find all the notes from a binder at the same time.
// you can also find a specific binders you could also do it through binder:id, or find them all through a user with a userId to find all binders from a specific user.

// FIND A SPECIFIC NOTE
notes.get('/:id', async (req, res) => { 
    try {
        const foundNotes = await Notes.findOne({ //findOne helper method on our Note model and saved it a variable called foundNotes. We want a specific notes returned so we have to pass the findOne method an object.
            where: { noteId: req.params.id } // this object specifies that we want to find a note 'where' its noteId is equal to the req.params.id.
        })
        res.status(200).json(foundNotes) // send back the foundNotes as a JSON response with a status of 200.
    } catch (error) {
        res.status(500).json(error) // send back a JSON response with the error and a status of 500.
    }
})

// CREATE A NOTE
notes.post('/', async (req, res) => {
    try {
        const newNote = await Notes.create(req.body) // create helper method on our Notes model and saved it a variable called newNote. Anyone using this route will send back a request body with that information. Therefore we can pass in the req.body as the argument.
        res.status(200).json({ // send back a JSON response data and a status of 200.
            message: 'Successfully inserted a new note',
            data: newNote
        })
    } catch(err) {
        res.status(500).json(err) // send back a JSON response with the error and a status of 500.
    }
}) // the 'create' method returns the data used to create the entry. we can use newNote in our response. 

// UPDATE A NOTE
notes.put('/:id', async (req, res) => { // update method on our Note model and saved it to a variable called updatedNotes. This method requires two arguments. First one is an object to update the entry. The second is an object that specifies which entry to update.
    try { // using this route will send a request body object containing the needed column and values. 
        const updatedNotes = await Notes.update(req.body, {
            where: {
                noteId: req.params.id
            }
        })
        res.status(200).json({ // send back a JSON response with a message that says the update is successful and include a status of 200.
            message: `Successfully updated ${updatedNotes} note(s)` // returning a custom success message because the update sequelize methong returns a number of how many entries were successfully returned.
        })
    } catch(err) {
        res.status(500).json(err) // send back a JSON response with the error and a status of 500.
    }
})
// DELETE A NOTE
notes.delete('/:id', async (req, res) => { // destroy method on our Note model and saved it to a variable called deletedNotes. This method accepts one argument (an object specifies the entries to delete).
    try {
        const deletedNotes = await Notes.destroy({
            where: {
                noteId: req.params.id // Deleting by ID, provided in the req.params. Use this information to specify which entry to delete.
            }
        })
        res.status(200).json({ // send a JSON response with a message that says deletion was successful and include a status of 200. 
            message: `Successfully deleted ${deletedNotes} note(s)` // similar to update, this returns the number of entries. That is why we are sending a custom message instead.
        })
    } catch(err) {
        res.status(500).json(err) // send back a JSON response with the error and a status of 500.
    }
})



// EXPORT
module.exports = notes


