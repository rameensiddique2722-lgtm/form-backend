const express=require("express");
const  mongoose = require("mongoose");
const Route=require("../backend/Route/Route.js");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
const cors = require("cors");
app.use(cors());

app.use(express.json()); // body parser for JSON

const PORT=process.env.PORT;
// console.log("PORT:", process.env.PORT);

app.use("/api/user",Route);

app.get("/",(req, res)=>{
    res.send("Backend is running")
});

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Monogo is connected"))
.catch(err=>console.log(err));
// console.log("MONGO:", process.env.MONGO_URI);

app.listen(PORT ,()=>{
    console.log(`server is running at ${PORT}`);
});