const express = require("express");
const addPage = require("../views/addPage");
const {Page} = require("../models")
const router = express.Router();


// retrieve all wiki pages
router.get("/", (req, res, next) => {
  res.send("Get request worked!");
});

// submit a new page to the database
router.post("/", async (req, res, next) => {

  const title = req.body.title;
  const content = req.body.content;

  try {
    const page = await Page.create({
      title: title,
      content: content,
      slug:
    });


    res.redirect('/')
  } catch(error) { next(error) }
  // res.json(req.body);
  //res.send("Post request for worked!");
});

// retrieve the "add a page" form
router.get("/add", (req, res, next) => {
  const page = addPage();
  res.send(page);
});

module.exports = router;
