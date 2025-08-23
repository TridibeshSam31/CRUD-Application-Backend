import express from "express"
import userController from "../controller/user.controller.js";


const userRouter = express.Router();

//jo user create hoga usko toh hum post method se hi denge 
userRouter.post("/", userController.createUser);


//ab hume CRUD ke liye read bhi toh krna hai data so uske liye hum get methoda ka use krenge
userRouter.get("/", userController.getUsers);



userRouter.get("/:id", userController.getUsersById);

//put request se cheeje update hoti hai mtlb ek new version hai purane ka 
userRouter.put("/:id", userController.updateUser);

//delete method of http
userRouter.delete("/:id", userController.deleteUser);


export default userRouter;