import express from "express";
const app = express();
const port = 7869;
import connectDB from "./Database/connectdb.js";
import route from "./Routes/route.js";
const DATABASE_URL = process.env.DATABASE_URL||"mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL)

// API
app.use(express.json())

// Route
app.use('/',route)



app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})