const express=require("express");
const app=express();
const Redis = require("ioredis");
const redis=new Redis();
const cors=require("cors")
//set up redis
app.use(cors({
    origin:"*"
}))
//post and get request
app.use(express.json());

app.get("/get",async (req,res)=>{
let data=await redis.get("todos");
console.log(data);
res.json({message:data})

})

app.post("/post",async (req,res)=>{
 let {todos}=req.body;   
//  console.log(todos)
 let string=JSON.stringify(todos)
await redis.set("todos",string);
let data=await redis.get("todos");
console.log(JSON.parse(data));
return res.json({message:"data added successfully"})
})
app.listen(8080,()=>{
    console.log("listening on port 8080")
})