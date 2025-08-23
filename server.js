import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"; 
import userRouter from "./routes/user.routes.js";

dotenv.config({
    path: "./.env"
});


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
// Register your routes here
app.use("/api", userRouter);


connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("MONGODB CONNECTION ERROR", err);
    process.exit(1);
});




