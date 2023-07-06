const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  CategoryID: {
    type: String,
    required: true,
    unique: true,
  },
  Question: {
    type: String,
    required: true,
  },
  Option1: {
    type: String,
    required: true,
  },
  Option2: {
    type: String,
    required: true,
  },
  Option3: {
    type: String,
    required: true,
  },
  Option4: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Questions", QuestionSchema);
module.exports = Question;
