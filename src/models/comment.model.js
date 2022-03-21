const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: String,
    bookId: String,
    userId: String,
},{
    timestamps: true,
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;