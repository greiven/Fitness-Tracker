var path = require("path");

module.exports = function(app) {
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// supply stats.html file
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});
};