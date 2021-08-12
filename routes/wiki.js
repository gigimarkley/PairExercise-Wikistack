const express = require("express");
const addPage = require("../views/addPage");
const router = express.Router();

// retrieve all wiki pages
router.get("/", (req, res, next) => {
  res.send("Get request worked!");
});

// submit a new page to the database
router.post("/", (req, res, next) => {
  res.json(req.body);
  //res.send("Post request for worked!");
});

// retrieve the "add a page" form
router.get("/add", (req, res, next) => {
  const page = addPage();
  res.send(page);
});

module.exports = router;
