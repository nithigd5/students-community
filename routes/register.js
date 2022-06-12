const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const { registerStudent }  = require('../models/database/student');

router.get("/",(req, res)=>{
    res.sendFile("/views/register.html", { root: '.'});
})

router.post("/", (req, res)=>{
    console.log(req.body);
    let registerData = req.body;
    registerStudent(registerData, (userID)=>{
        if(userID){
            console.log("Registration Successfull");
            req.session.userID = userID;
            req.session.name = registerData['name'];
            req.session.email = registerData.email;
            res.redirect("/home");
        }else{
            console.log("Registration Failed");
            res.redirect("/register");
        }
    })
})

module.exports = router;