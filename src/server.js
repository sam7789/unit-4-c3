const  connect = require("./configs/db");
const app = require("./index");


app.listen(5000, async ()=>{
    try {
        connect();
        console.log('Listening to Port 5000');
    } catch (error) {
        console.error(error.message);
    }
})