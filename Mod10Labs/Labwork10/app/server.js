const express =require('express')
const app=express()

app.get('/',(req,res)=>{

    res.send("docker is working")
})

app.listen('5050',()=>{
    console.log('working on 5050')
})