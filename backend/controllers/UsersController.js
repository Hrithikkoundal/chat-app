import User from "../models/userModel.js";

export const users = async (req, res) =>{
    try {
        const loggedInUserId  = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId }}).select("-password");

        if(!filteredUsers){
            return res.status(200).json([])
        }

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in get Users controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}