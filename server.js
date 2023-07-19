'use strict'
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const pageNotFound = require('./src/middleware/404');
const serverError = require('./src/middleware/500');

app.get('/', (req, res)=>{
    res.status(200).json({
        code:200,
        message:'Welcome in New World ✨✨'
    })
})

app.use(serverError);
app.get('*',pageNotFound);

function start(port){
    app.listen(port, ()=> console.log('Up and running on port : ', port))
}

module.exports={
    app,
    start
}