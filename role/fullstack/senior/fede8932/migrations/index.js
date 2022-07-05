const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config()


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
const SERVER_PORT = process.env.PORT | 3333

app.listen(SERVER_PORT, (req, res) => {
    console.log("Server Listening on port: " + SERVER_PORT);
});