const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const layout = require("./views/layout");
// const { db } = require("./models");
const { db, Page, User } = require("./models/index.js");
const wikiRouter = require("./routes/wiki");
const usersRouter = require("./routes/users");

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

app.use("/wiki", wikiRouter);
//app.use("/users", usersRouter);

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
  await db.sync({ force: true });
};

init();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
