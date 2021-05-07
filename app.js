const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const PORT = process.env.PORT;
const Product = require("./models/productSchema");
const session = require('express-session')

//settings
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

//database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;

mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err);
  });

// express-session
app.use(
  session({
    secret: process.env.MY_SECRET,
    cookie: {
      // set the time for session
      maxAge: 1000 , // 1minute
      // expires: new Date(Date.now()+36000)
    },
  })
);
//********BODY PARSER****** */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//**********ROUTES********* */

app.use("/", userRouter);
app.use("/product", productRouter);

app.listen(PORT, () => {
  `Listen to PORT ${PORT}`;
});
