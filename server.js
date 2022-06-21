
const express = require('express');
const app = express();
const session = require('express-session');
const register = require("./routes/register");
const login = require("./routes/login");
const post = require("./routes/post");
const { sessionConfig } = require('./config/session');
const userSession = session(sessionConfig);
app.use(userSession);
const port = 80;

app.use("/assets",express.static("assets"));

// Routes are handled here.
app.use("/register", register);
app.use("/login", login);
app.use("/post", post);

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/login.html");
})

app.get("/home", (req, res)=>{
    res.sendFile(__dirname+"/views/home.html");
})

app.listen(port,'0.0.0.0', ()=>{
    console.log(`Listening at port ${port}`);
})