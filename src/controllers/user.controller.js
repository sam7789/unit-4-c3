const express = require('express');

const{body,validationResult} = require("express-validator");
const User = require('../models/user.model');

const router = express.Router();

router.post("/",
body("firstName").trim().not().isEmpty().withMessage("first name cannot be empty").isLength({min: 3, max: 30}).withMessage("Must be between 3 to 30 characters"),body("lastName").trim().isLength({min: 3, max: 30}).withMessage("Must be between 3 to 30 characters"),body("age").not().isEmpty().withMessage("Age cannot be empty").isNumeric().withMessage("Must be between 1 to 150").custom((val)=>{
    if(val && val>= 1&& val <= 150){
        throw new Error("Incorrect Age");
    }
    return true;
}), body("email").not().isEmpty().withMessage("first name cannot be empty").isEmail().custom(async(val)=>{
    const user = await User.findOne({email:val});
    if(user){
        throw new Error("Email already taken");
    }
    return true;
}),body("profileImages").not().isEmpty().withMessage("cannot be empty").isArray().isLength({min:1}), body("password") 
)