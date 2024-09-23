"use strict";

const { connect } = require("mongoose");

module.exports = () => {
  connect(process.env.MONGODB || "mongodb://localhost:27017/TodoAPI")
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB not connected"));
};
