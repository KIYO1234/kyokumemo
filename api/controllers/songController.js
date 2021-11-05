const connection = require("../index");

exports.getAllSongs = async (req, res) => {
  console.log("getAllSongs");
  console.log("req.body: ", req.body);
  // const result = await connection.query("SELECT * FROM songs");
  // return result.json();
  await connection
    .query("SELECT * FROM songs", (err, result, fields) => {
      console.log("successfully got all songs 👍👍");
      res.json(result);
      // return result.json();
    })
    .catch((err) => {
      console.log("error(getAllSongs): ", err);
    });
};

exports.demo = async (req, res) => {
  const result = [
    { singer: "清水翔太", title: "恋唄" },
    { singer: "EXILE", title: "もっと強く" },
  ];
  res.json(result);
};
