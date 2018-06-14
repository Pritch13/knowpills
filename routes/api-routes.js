var db = require("../models");
var connection = require("../config/config.json");

module.exports = function (app) {

    app.get("/api/posts/", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.get("/api/comment/", function (req, res) {
        db.Comment.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.get("/api/alt/", function (req, res) {
        db.Alternative.findAll({})
            .then(function (data) {
                console.log(data);

                res.json(data);
            });
    });

    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create({
            username: req.body.username,
            title: req.body.title,
            body: req.body.body
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/comment", function (req, res) {
        console.log(req.body);
        db.Comment.create({
            username: req.body.username,
            body: req.body.body
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.get("/api/posts/:id", function (req, res) {
        console.log(req.params.id);
        db.Post.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                console.log(dbPost);
                
                res.json(dbPost);
            });
    });

};