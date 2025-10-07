import mongoose from "mongoose";

function connect() {
    mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 50000, 
        socketTimeoutMS: 50000,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("DB connection error:", err);
    })
}

export default connect;