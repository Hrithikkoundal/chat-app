import mongoose from "mongoose";

const useSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLenght: 6
    },
    gender:{
        type:String,
        required: true,
        enum: ["male", "female"]  //to let the user choose the string those are available in the array
    },
    profilePic:{
        type: String,
        default: ""
    }
    //createdAt, updatedAt
},{ timestamps:true })

const User = mongoose.model("User", useSchema);

export default User;