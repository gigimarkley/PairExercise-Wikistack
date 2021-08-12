const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const layout = require("./views/layout")
// const { db } = require("./models");
const {db,Page, User} = require("./models/index.js")

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res, next) => {
  res.send(layout(""));
});


// const page = async () => {await Page.sync()}
// const user = async () => {await User.sync()}

// page();
// user();

const init = async () => {
  await db.sync({force: true});
}

init();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
