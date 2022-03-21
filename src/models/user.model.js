const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    profileImages: [{type: String}] ,
    type: String,
    password: String
},{
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model("user",userSchema);

module.exports = User;