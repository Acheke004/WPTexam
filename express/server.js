const express=require("express")
const app=express();
const routes=require('./routes')

// app.get('/',(req,res)=>{
//     res.send("hi")
// })



app.use(routes)



app.listen(8000,()=>{
    console.log("server is runnning")
})
