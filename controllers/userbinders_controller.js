// DEPENDENCIES
const userbinders = require('express').Router()
const db = require('../models')
const { UserBinders } = db 
const { Op } = require('sequelize')

// FIND ALL BINDERS
userbinders.get('/', async (req, res) => {
    try {
        const founduserBinders = await UserBinders.findAll({
        })
        res.status(200).json(founduserBinders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BINDER
userbinders.get('/:id', async (req, res) => {
    try {
        const founduserBinder = await UserBinders.findOne({
            where: { BinderId: req.params.id }
        })
        res.status(200).json(founduserBinder)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BINDER
userbinders.post('/', async (req, res) => {
    try {
        const newuserBinder = await UserBinders.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new binder',
            data: newuserBinder
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BINDER
userbinders.put('/:id', async (req, res) => {
    try {
        const updateuserBinders = await UserBinders.update(req.body, {
            where: {
                BinderId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateuserBinders} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BINDER
userbinders.delete('/:id', async (req, res) => {
    try {
        const deleteduserBinder = await UserBinders.destroy({
            where: {
                BinderId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteduserBinder} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = userbinders
