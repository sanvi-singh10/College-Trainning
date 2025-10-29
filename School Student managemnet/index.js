const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require('./Routes/studentRoutes.js');
const Student = require("student.js");

const app = express();
app.use(express.json());
app.use('/', studentRoutes);

mongoose.connect(process.env.MONGO_URI);


// server
let port = 8080;
app.listen(port, ()=>{
    console.log(`App is listening on port :${port}`);
})