const { Schema, model } = require("mongoose");

const contectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  vip: {
    type: Boolean,
    required: true,
  },
});

const Content = model("content", contectSchema);
module.exports = Content;
