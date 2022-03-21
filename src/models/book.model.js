const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    likes: { type: Number, required: false, default: 0 },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    publicationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "publication",
        required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);;

const Book = mongoose.model("book",bookSchema);

module.exports = Book;