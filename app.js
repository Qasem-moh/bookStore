const express=require('express')


//init app
const app=express()
const port=4525


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})