// DEPENDENCIES
import express from "express"
const userbinders = require('express').Router()
const db = require('../models')
const { UserBinders } = db 
const { Op } = require('sequelize')
const { user } = require('pg/lib/defaults')

// FIND ALL BINDERS
userbinders.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const founduserBinders = await UserBinders.findAll({
        })
        res.status(200).json(founduserBinders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND ALL BINDERS FOR USER
userbinders.get('/user/:userId', async (req: express.Request, res: express.Response) => {
    try {
        const foundspecificBinders = await UserBinders.findAll({
            where: { userId: req.params.userId }
        })
        res.status(200).json(foundspecificBinders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BINDER
userbinders.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const founduserBinder = await UserBinders.findOne({
            where: { binderId: req.params.id }
        })
        res.status(200).json(founduserBinder)
    } catch (error) {
        res.status(500).json(error)
    }
}) 

// CREATE A BINDER
userbinders.post('/', async (req: express.Request, res: express.Response) => {
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
userbinders.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const updateuserBinders = await UserBinders.update(req.body, {
            where: {
                binderId: req.params.id
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
userbinders.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const deleteduserBinder = await UserBinders.destroy({
            where: {
                binderId: req.params.id
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
export default userbinders
