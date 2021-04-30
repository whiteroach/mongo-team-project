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
const DB_LINK = process.env.DB_LINK + DB_NAME;

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
>>>>>>> e71955660f206dbcc08bd9453c30ebc301528094

//********BODY PARSER****** */
app.use(express.json());

//**********ROUTES********* */
<<<<<<< HEAD
app.use('/', require('./routes/auth')); 
=======
app.use("/", require("./routes/auth"));
>>>>>>> e71955660f206dbcc08bd9453c30ebc301528094

app.listen(PORT, () => {
  `Listen to PORT ${PORT}`;
});
