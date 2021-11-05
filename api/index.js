const mysql = require("mysql");
const express = require("express");
const songController = require("./controllers/songController");
const userRouter = require("./routes/userRoutes");
const songRouter = require("./routes/songRoutes");

require("dotenv").config();

connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

// 別ファイルから使えるようにexports
exports.connection = connection;

connection.connect((err) => {
  if (err) {
    console.log("error: ", err);
    return;
  }
  console.log("💻 DB connection success!!");
});

// EXPRESS
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`🚀 Start on port ${port}`);
});

// Middleware
app.use((req, res, next) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  } catch (err) {
    console.log("error at express middleware: ", err);
  }
  next();
});

// 別ファイルでのルーティング
app.use("/api/v1/users", userRouter);
app.use("/api/v1/songs", songRouter);

// app.get("/api/songs", songController.getAllSongs());
// app.get("/api/v1/songs", (req, res) => {
//   console.log("/api/v1/songs (get)✊");

//   connection.query("SELECT * FROM songs", (err, result, fields) => {
//     res.json(result);
//     console.log("result(getAllSongs) 👍: ", result);
//     if (err) {
//       console.log("err(get all songs): ", err);
//     }
//   });
// });

// app.get("api/demo", songController.demo);
