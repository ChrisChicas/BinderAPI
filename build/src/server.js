"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Binder App'
    });
});
// LOGIN
app.post('/login', (req, res) => {
    // inputUserName, inputPassword
});
// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
// CONTROLLERS 
const notes_controller_1 = __importDefault(require("../controllers/notes_controller"));
app.use('/notes', notes_controller_1.default);
const userbinders_controller_1 = __importDefault(require("../controllers/userbinders_controller"));
app.use('/userbinders', userbinders_controller_1.default);
const usertable_controller_1 = __importDefault(require("../controllers/usertable_controller"));
app.use('/usertables', usertable_controller_1.default);
