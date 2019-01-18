const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  // description: {type: String, required: true},
  // username: { type: String, unique: true, required: true },
  // tags:[{type: String}],
  comment: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  postDate: { type: Date, default: Date.now },
  belongsToTask: {type: String}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
