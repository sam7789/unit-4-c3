const express = require('express');
const userControllers = require('./controllers/user.controller');
const bookController= require("./controllers/book.controller");
const publicationController= require("./controllers/publication.controller");
const commentController= require("./controllers/comment.controller");

const app = express();
app.use(express.json());

app.use("users",userControllers);
app.use("/books", bookController);
app.use("/publications", publicationController);
app.use("/comments", commentController);

module.exports = app;