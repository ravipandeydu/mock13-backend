const { Router } = require("express");
require("dotenv").config();

const { WordModel } = require("../models/Word.model");

const wordRoutes = Router();

wordRoutes.get("/", async (req, res) => {
  const word = await WordModel.find();
  res.send(word);
});

// wordRoutes.post("/create", async (req, res) => {
//   function createRandom() {
//     let x = Math.random().toString();
//     x = Number(x[16]);
//     if (x < 3) {
//       x = 3;
//     }
//     let letters = "abcdefghijklmnopqrstuvwxyz";
//     let rand = function (n) {
//       return Math.floor(Math.random() * n);
//     };
//     let word = "";
//     for (let i = 0; i < x; i++) {
//       let randLetters = letters[rand(letters.length)];
//       word += randLetters;
//     }
//     return word;
//   }
//   const newWord = new WordModel({word: createRandom()});
//   try {
//     await newWord.save();
//     res.send(newWord);
//   } catch (err) {
//     res.send("something went wrong");
//     console.log(err);
//   }
// });

wordRoutes.patch("/edit/63a1634d51c56d34bd2a63d6", async (req, res) => {
  function createRandom() {
    let x = Math.random().toString();
    x = Number(x[16]);
    if (x < 3) {
      x = 3;
    }
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let rand = function (n) {
      return Math.floor(Math.random() * n);
    };
    let word = "";
    for (let i = 0; i < x; i++) {
      let randLetters = letters[rand(letters.length)];
      word += randLetters;
    }
    return word;
  }
  const updatedWord = await WordModel.findOneAndUpdate(
    { _id: "63a1634d51c56d34bd2a63d6" },
    {word: createRandom()}
  );
  if (updatedWord) {
    res.send(updatedWord);
  } else {
    res.send("couldn't update");
  }
});

module.exports = {
  wordRoutes,
};
