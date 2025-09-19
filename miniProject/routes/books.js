const express = require("express");
const nameDir = require("../util/path");
const path = require("path");
const { route } = require("../../3rdDay/routes/course");
const router = express.Router();

// creation of route's

// first route
router.get("/books", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "books.html"));
});

// second route
router.get("/add", (req, res) => {
  res.sendFile(path.join(nameDir, "views", "addBook.html"));
});

// third route
router.post("/add", (req, res) => {
  console.log(req.body);
  res.redirect("/add");
  //   this is bcz appa redirect hoky fr dubarey book add wala form open kr skiye
});

module.exports = router;
