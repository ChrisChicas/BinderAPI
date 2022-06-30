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
const usertable = require('express').Router();
const db = require('../models');
const { UserTables } = db;
const { Op } = require('sequelize');
// FIND ALL USERS
usertable.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const founduserTable = yield UserTables.findAll();
        res.status(200).json(founduserTable);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// FIND A SPECIFIC USER
usertable.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const founduserTable = yield UserTables.findOne({
            where: { userId: req.params.id }
        });
        res.status(200).json(founduserTable);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// SEARCY BY NAME
usertable.get('/name/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const founduserName = yield UserTables.findOne({
            where: { userName: req.params.name }
        });
        res.status(200).json(founduserName);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// CREATE A USER
usertable.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield UserTables.create(req.body);
        res.status(200).json({
            message: 'Successfully created a new user',
            data: newUser
        });
        console.log(req.body);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// UPDATE A USER
usertable.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateduserTable = yield UserTables.update(req.body, {
            where: {
                userId: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updateduserTable} (s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE A USER
usertable.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield UserTables.destroy({
            where: {
                userId: req.params.id
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// EXPORT
exports.default = usertable;
