/* const express = require("express");
const router = express.Router();
const app = express();
const { createUser, loginUser } = require("../controllers/auth");

router.post("/", loginUser);

router.post("/createdUser", createUser);

module.exports = router; */

const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/auth");

router.post("/", loginUser);

router.post("/newUser", createUser);

module.exports = router;
