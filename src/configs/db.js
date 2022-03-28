const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://Albinsermongo:Albinsermongo@cluster0.ivesr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};