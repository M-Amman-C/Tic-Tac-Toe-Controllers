import express from "express";
import bodyParser from "body-parser";
import homeRoute from './routes/home.js';
import gameRoute from './routes/game.js';
import session from 'express-session';

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(session({
    secret: 'as23mn45',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use('/', homeRoute);
app.use('/game', gameRoute);

app.listen(port,()=>{
    console.log("Server running on port "+port+"...\n link: http://localhost:3000/");
});