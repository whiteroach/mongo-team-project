const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
// const autentification = require("./routes/auth");
const productRouter = require("./routes/product");
const PORT = process.env.PORT || 8080;
const Product = require("./models/productSchema");

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

// registration form
app.get("/", (req, res) => {
  res.render("registration");
});

// login form
// app.get("/login", (req, res) => {
//   res.render("login");
// });
//********BODY PARSER****** */
app.use(express.json());

//**********ROUTES********* */
// app.use("/", autentification);
// app.use("/", require("./routes/auth"));
app.use("/product", productRouter);

app.listen(PORT, () => {
  `Listen to PORT ${PORT}`;
});
