const express = require('express');

const{body,validationResult} = require("express-validator");
const User = require('../models/user.model');

const router = express.Router();

router.post("/",
body("firstName").trim().not().isEmpty().withMessage("first name cannot be empty").isLength({min: 3, max: 30}).withMessage("Must be between 3 to 30 characters"),
body("lastName").trim().isLength({min: 3, max: 30}).withMessage("Must be between 3 to 30 characters"),body("age").not().isEmpty().withMessage("Age cannot be empty").isNumeric().withMessage("Must be between 1 to 150").custom((val)=>{
    if(val && val>= 1&& val <= 150){
        throw new Error("Incorrect Age");
    }
    return true;
}), 
body("email").not().isEmpty().withMessage("first name cannot be empty").isEmail().custom(async(val)=>{
    const user = await User.findOne({email:val});
    if(user){
        throw new Error("Email already taken");
    }
    return true;
}),
body("profileImages").not().isEmpty().withMessage("cannot be empty").isArray().isLength({min:1}), body("password").not().isEmpty().withMessage("password is required").custom((val)=>{
    const pass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    if(!val.match(pass)){
        throw new Error("password must be strong");
    }
    return true;
}),
body("type").custom((val)=>{
    if(!val){
        val = "user";
    }
}),

async(req,res)=>{
    try {
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()){
            return res.status(400).send({errors: errors.array()});
        }

        const user = await User.create(req.body);

        return res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
);

module.exports = router;