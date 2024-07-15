import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to mongo DB.");
    } catch (error) {
        console.log("Error console",error)
    }
}

export default connectMongoDB;