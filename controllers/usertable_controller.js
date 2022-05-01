// DEPENDENCIES
const usertable = require('express').Router()
const db = require('../models')
const { UserTable } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
usertable.get('/', async (req, res) => {
    try {
        const founduserTable = await UserTable.findAll()
        res.status(200).json(founduserTable)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
usertable.get('/:id', async (req, res) => {
    try {
        const founduserTable = await UserTable.findOne({
            where: { UserId: req.params.id }
        })
        res.status(200).json(founduserTable)
    } catch (error) {
        res.status(500).json(error)
    }
})


// SEARCY BY NAME
usertable.get('/:name', async (req, res) => {
    try {
        const founduserName = await UserTable.findOne({
            where: { UserName: req.params.name }
        })
        res.status(200).json(founduserName)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
usertable.post('/', async (req, res) => {
    try {
        const newUser = await UserTable.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER
usertable.put('/:id', async (req, res) => {
    try {
        const updateduserTable = await UserTable.update(req.body, {
            where: {
                UserId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateduserTable} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// DELETE A USER
usertable.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await UserTable.destroy({
            where: {
                UserId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = usertable