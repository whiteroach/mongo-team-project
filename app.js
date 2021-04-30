const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');

//settings
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:false}))


//database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.DB_LINK + DB_NAME;

mongoose.connect(DB_LINK, {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{console.log('Mongoose found his way to the database...')})
.catch(err =>{console.log(err)})
const PORT = process.env.PORT || 8080;


//********BODY PARSER****** */
app.use(express.json());

//**********ROUTES********* */
app.use('/', require('./routes/auth'));

app.listen(PORT, ()=>{`Listen to PORT ${PORT}`})