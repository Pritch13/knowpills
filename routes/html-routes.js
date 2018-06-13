var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/alternatives", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/alternatives.html"));
  });

  app.get("/support", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/support.html"));
  });

  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  app.get("/comment", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comment.html"));
  });

};