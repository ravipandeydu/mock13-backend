const { Router } = require("express");
require("dotenv").config();

const { UserModel } = require("../models/User.model");

const userRoutes = Router();

userRoutes.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

userRoutes.post("/create", async (req, res) => {
  const newUser = new UserModel(req.body);
  try {
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.send("something went wrong");
    console.log(err);
  }
});

userRoutes.patch("/edit/:userId", async (req, res) => {
  const { userId } = req.params;
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: userId },
    req.body
  );
  if (updatedUser) {
    res.send(updatedUser);
  } else {
    res.send("couldn't update");
  }
});

module.exports = {
  userRoutes,
};
