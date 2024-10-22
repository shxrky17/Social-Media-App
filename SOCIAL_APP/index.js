const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const postsRoute=require("./routes/posts")
dotenv.config();


async function connectToMongoDB() {
    try {
        // Connect to MongoDB using the URI
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connectToMongoDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postsRoute)
app.get("/",(req,res)=>{
    res.send("welcome")
})



app.get("/users",(req,res)=>{
    res.send("welcome to users page")
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})