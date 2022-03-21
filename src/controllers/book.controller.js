const express = require("express");

const Book = require("../models/comment.model");

const router = express.Router();

const { body, validationResult } = require("express-validator");

router.post(
  "/",
  body("coverImage")
    .not()
    .isEmpty()
    .withMessage("Cover image is required")
    .isLength(1)
    .withMessage("must be one at a time"),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const books = await Book.create(req.body);

      res.status(201).send(books);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);
router.get("",async (req, res)=>{
  try{
      const books= await Book.find().limit(10).lean().exec();
  res.status(200).send(books);
  }catch(err){
      res.status(500).send(err.message);
  }
  
})
module.exports = router;