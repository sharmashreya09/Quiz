const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  CategoryName: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model("Categories", CategorySchema);
module.exports = Category;
