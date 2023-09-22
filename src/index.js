const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const app = express();


const http = require("http");
const server = http.createServer(app);
const io = new socketio.Server().listen(server);

let scores = new Array();

app.set("port", process.env.PORT || 1212);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {

    scores.sort(function (a, b) {
        return a.score - b.score;
    });
    scores.reverse();
    if (scores.length > 5) {
        scores.splice(5);
    }

    if (scores.length == 5) {
        res.render("index", {
            allScores: 0,
            lastScore: scores[4].score
        });

    } else {
        res.render("index", {
            allScores: 0,
            lastScore: 0
        });
    }
});


app.post("/", (req, res) => {
    res.redirect("/");
});
app.get("/top", (req, res) => {
    res.render("ranking", { scores });
});



app.get("/makers", (req, res) => {
    res.render("credits");
});

io.on("connection", socket => {
    console.log("connected");

    socket.emit("prueba1", {
        primero: 3
    })

    socket.on("high score", data => {
        scores.push({
            score: data.score,
            nickname: data.nickname,
        })
        let highScore = data.score;
        let nickname = data.nickname;
        console.log(scores);
        io.sockets.emit("show high score", {
            highScore: highScore,
            nickname: data.nickname,
        });
        io.sockets.emit("last score", {
            lastScore: scores[4],
        });
    });

    socket.emit("prueba", data => {
        console.log("prueba")
    })

});

server.listen(app.get("port"), () => {
    console.log("Server in " + app.get("port"));
});