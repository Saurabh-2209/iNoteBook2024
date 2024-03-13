const mongoose = require("mongoose")

mongoURI = "mongodb://localhost:27017/inotebook"


const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=> console.log("connected to mongodb"));
}

module.exports = connectToMongo;