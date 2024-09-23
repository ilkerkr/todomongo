"use strict";

const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200,
    },

    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 200,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "todos",
  }
);

module.exports = model("Todo", todoSchema);
