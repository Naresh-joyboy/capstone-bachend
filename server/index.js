const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {StudentModel,StudentModel1} = require('./models/Employee')

 
const app =express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}));

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => console.log(error,"connect error"));

app.post("/login",(req,res) =>{
    const {email, password} =req.body; 
    StudentModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password === password){
                res.json('success')
            } else {
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record existed")
            
        }
    })
})

app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

// --------------------Recquery.data------------------------------

app.get("/users",(req,res)=>{
    StudentModel1.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

app.get("/",(req,res)=>{
    res.send({message:"Hello"});
});

app.post("/user",(req,res)=>{
    req.body.ids  = StudentModel1.length + 1 ;
    StudentModel1.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.status(500).json({error:err.message}))
});


app.listen(5000,() =>{
    console.log('server is running')
})