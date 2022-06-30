"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userbinders = require('express').Router();
const db = require('../models');
const { UserBinders } = db;
const { Op } = require('sequelize');
const { user } = require('pg/lib/defaults');
// FIND ALL BINDERS
userbinders.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const founduserBinders = yield UserBinders.findAll({});
        res.status(200).json(founduserBinders);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// FIND ALL BINDERS FOR USER
userbinders.get('/user/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundspecificBinders = yield UserBinders.findAll({
            where: { userId: req.params.userId }
        });
        res.status(200).json(foundspecificBinders);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// FIND A SPECIFIC BINDER
userbinders.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const founduserBinder = yield UserBinders.findOne({
            where: { binderId: req.params.id }
        });
        res.status(200).json(founduserBinder);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// CREATE A BINDER
userbinders.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newuserBinder = yield UserBinders.create(req.body);
        res.status(200).json({
            message: 'Successfully created a new binder',
            data: newuserBinder
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// UPDATE A BINDER
userbinders.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateuserBinders = yield UserBinders.update(req.body, {
            where: {
                binderId: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updateuserBinders} (s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE A BINDER
userbinders.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteduserBinder = yield UserBinders.destroy({
            where: {
                binderId: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deleteduserBinder} (s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// EXPORT
exports.default = userbinders;
