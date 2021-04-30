const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

//settings
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

//database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;

<<<<<<< HEAD
mongoose.connect(DB_LINK, {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{console.log('Mongoose found his way to the database...')})
.catch(err =>{console.log(err)})
const PORT = process.env.PORT || 4000;
=======
mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = process.env.PORT || 8080;
>>>>>>> d5896462469371f27d6f18b1933c497d4b922826

//********BODY PARSER****** */
app.use(express.json());

//**********ROUTES********* */
<<<<<<< HEAD
app.use('/', './routes/auth'); 
=======
app.use("/", require("./routes/auth"));
>>>>>>> d5896462469371f27d6f18b1933c497d4b922826

app.listen(PORT, () => {
  `Listen to PORT ${PORT}`;
});