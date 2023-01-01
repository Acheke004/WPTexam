const express=require("express")
const router=express.Router()
const path=require("path")

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})
router.get('/student',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/student.html'))
})
router.get('/user',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/user.html'))
})

module.exports=router