const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const { login }  = require('../models/database/student');

router.get("/",(req, res)=>{
    res.sendFile("/views/login.html", { root: '.'});
})

router.post("/", (req, res)=>{
    console.log(req.body);
    let loginData = req.body;
    let user = login(loginData)
    if(user){
            console.log("Registration Successfull");
            req.session.userID = user.id;
            req.session.name = user.name;
            req.session.email = user.email;
            res.redirect("/home");
    }else{
            console.log("Login Failed");
            res.redirect("/login");
    }
})

module.exports = router;