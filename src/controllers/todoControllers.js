"use strict";

const Todo = require("../models/todo");
const CustomError = require("../helper/customError");
const mongoose = require("mongoose");

module.exports = {
  list: async (req, res) => {
    const data = await Todo.find({});

    res.status(200).send({
      err: false,
      data,
    });
  },

  create: async (req, res) => {
    const data = await Todo.create(req.body);

    res.status(201).send({
      err: false,
      data,
    });
  },

  read: async (req, res) => {
    const isIdValid = mongoose.Types.ObjectId.isIdValid(req.params.id);

    if (!isIdValid) throw new CustomError("Id is not a valid", 400);

    const data = await Todo.findOne({ _id: req.params.id });

    if (!data) throw new CustomError("Data is not found", 404);

    res.status(200).send({
      err: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Todo.updateOne({ _id: req.params.id }, req.body);
    const updatedData = await Todo.findOne({ _id: req.params.id });

    res.status(202).send({
      err: false,
      updatedData,
    });
  },

  delete: async (req, res) => {
    const { deletedCount } = await Todo.deleteOne({ _id: req.params.id });

    if (!deletedCount) throw new CustomError("something went wrong!", 404);

    res.status(204).send({
      err: false,
      data,
    });
  },
};
