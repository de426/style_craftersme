const mongoose = require("mongoose");
uri = "mongodb+srv://dhruv:<Dhruv@123>@cluster0.jt8a9dr.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = () => {
    return mongoose.connect(uri, Options, {
        useNewUrlParser: true,
        useUnifieldTopology: true,
    });
};
MediaSourceHandle.exports = connectDB;