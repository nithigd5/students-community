const express = require('express')
const router = express.Router()
const { uploadPost, getAllPost }  = require('../models/database/post');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var fs = require('fs')
const authenticate = require('./authenciate');

router.use('/', authenticate);

router.get("/",(req, res)=>{
    // req.session.userID = 4;
    // req.session.name = "Nithi GD";
    // req.session.email = "g.d.nithi5@gmail.com";
    // console.log(req.session.id)
    res.sendFile("/views/post.html", { root: '.'});
})


router.post("/", upload.single('image'), (req, res)=>{
    console.log(req.file);
    let registerData = req.body;
    uploadPost(registerData, (postID)=>{
        if(postID){
            console.log("Posted Successfull");
            res.redirect("/post");
        }else{
            console.log("Post Failed");
            res.redirect("/post");
        }
    })
})

router.get('/getAllPost', async (req, res)=>{
    let posts = await getAllPost();
    // console.log(posts)
    if(posts){
        res.json(posts);
    }else{
        res.json({
            error: "Unable to get data."
        })
    }
})

module.exports = router;