const mongoose = require('mongoose');
let username = "sam7789";
let password = "XN0ynbM9n8KmXqZL"

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.omfqq.mongodb.net/evaluation2?retryWrites=true&w=majority`);
}
module.exports = connect;