const mongoose = require("mongoose");

DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser:true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));