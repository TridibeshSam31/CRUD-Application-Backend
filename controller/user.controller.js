//CRUD KA MTLB HOTA HAI KI CREATE KRO , READ KRO , UPDATE KRO , DELETE KRO 
//SO START KRTE HAI USKE LIYE HUM PEHJLE USER MODEL SE DATA LENGE

import User from "../models/user.model.js";

//create the user using a methode create() we will provide the input of body(what we get from client or frontend)
export const createUser = async (req,res) => {
try {
    const user = await User.create(req.body);
    res.json({success: true, user});
} catch (error) {
    res.json({sucess: false, error: error.message})
}
}

//ab hume CRUD ke liye read bhi krna hai toh uske liye hum getUsers() ka use krenge
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({success: true, users});
    } catch (error) {
        res.json({sucess: false, error: error.message})
    }
}

//getusersbyId isiliye taaki hum kisi bhiu specific user ko utha kr check kr ske
export const getUsersById = async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({success: true, user});
    } catch (error) {
        res.json({sucess: false, error: error.message})
    }
}

//update krenge user ko pehle db mai dhundenge fir update krenge so uske liye method le liya findbyIdAndUpdate
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({success: true, user});
    } catch (error) {
        res.json({sucess: false, error: error.message})
    }
}
//user ko delete krna hai toh uske liye method le liya findByIdAndDelete aur usme humne input ke tor pr url de diya 
export  const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({success: true});
    } catch (error) {
        res.json({sucess: false, error: error.message})
    }
}


export default {
    createUser,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser
}