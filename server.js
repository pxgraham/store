const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json());
// Serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});