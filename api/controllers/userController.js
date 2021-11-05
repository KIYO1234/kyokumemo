const mysql = require("../index");

const users = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" },
];

exports.getAllUsers = (req, res) => {
  try {
    res.send(JSON.stringify(users));
    console.log("🐶 users: ", users);
  } catch (err) {
    console.log("error at server: ", err);
  }
};

exports.getAllMysqlUsers = (req, res) => {
  console.log("🔑 got get request");

  mysql.connection.query("SELECT * FROM users", (err, result, fields) => {
    res.json(result);
    console.log("successfully connected to mysql!!");
    if (err) {
      console.log("err: ", err);
    }
  });
};
