//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let showList = await trakt.getTrendingShows();
  console.log(showList);
  response.render("index", { title: "Shows", shows: showList });
});
app.get("/shows", async (request, response) => {
  let popularShow = await trakt.getPopularShows();
  console.log(popularShow);
  response.render("shows", { title: "Details of popular", summary: popularShow });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


