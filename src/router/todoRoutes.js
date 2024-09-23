"use strict";

const router = require("express").Router();
const todo = require("../controllers/todoControllers");

router.route("/").get(todo.list).post(todo.create);

router.route("/:id").get(todo.read).put(todo.update).delete(todo.delete);

module.exports = router;