import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import { userRouter } from "./routes/users.js";



const app = express();


app.use(bodyParser.json());


app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

  mongoose.connect("mongodb+srv://user:123@recipies.xtgm43k.mongodb.net/recipies?retryWrites=true&w=majority")
 
  
  app.listen(3001, () => {
    console.log(`Server is running on port 5000.`);
  });