const express = require("express");
const app = express();
const home = require("./routes/home");
const path = require("path");

//middleware
app.use(express.json({ extended: false }));



//routes
app.use(home);

//serve static assets in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//port for connecting server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server has started on port ", port);
});
