const router = require("express").Router();
const { response, request } = require("express");
const User = require("../Models/User");

// insert new user to the system

router.route("/add").post(async (requst, response) => {
  const { name,email,username,password } = requst.body;

  const newUser = User({
    name,
    email,
    username,
    password
  });

  const add = await newUser
    .save()
    .then(() => {
      console.log("User added !");
      response.status(200).send({ status: "User added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});



router.route("/authenticate").post(async (requst, response) => {
  const { username, password } = requst.body;

  try {
    const user = await User.findOne({ username: username });
    if (user.password == password) {
      response.json(user);
    }
    if (!user) {
      return response.status(404).json({ Status: "user not found" });
    }
  } catch (err) {
    console.error(err);
    response.status(500).send({ Status: "Error" });
  }
});



module.exports = router;