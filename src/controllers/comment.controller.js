const express = require("express");

const Comment = require("../models/comment.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {

      const comments = await Comment.create(req.body);

      res.status(201).send(comments);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);
router.get("",async (req, res)=>{
    try{
        const comments= await Comment.find().limit(10).lean().exec();
    res.send(comments);
    }catch(err){
        res.status(500).send(err.message);
    }
    
})
module.exports = router;