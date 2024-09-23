"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 800;

//!------------------------------------------------------------------!//

app.use(express.json());

require("express-async-errors");
require("./src/configs/dbConnection")();

app.use(require("./src/router/todoRoutes"));

app.use(require("./src/middlewares/errorHandler"));
//!------------------------------------------------------------------!//

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
