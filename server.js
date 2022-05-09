
const express = require('express');

const app = express();

//DB init

require("./server/config/mongoose.config");

//Para usar json y obtener URL data

app.use(express.json(), express.urlencoded({ extended: true }));

//Routes

const myRoutes = require("./server/routes/jokes.routes");

myRoutes(app);

app.listen(8000, () => console.log("SERVER LOADED"));