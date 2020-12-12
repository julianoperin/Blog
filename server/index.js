const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

//! READ
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result); //! Send the result to the front end
  });
});

//! READ single post
app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result); //! Send the result to the front end
  });
});

//! POST
app.post("/api/create", (req, res) => {
  const userName = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;
  const date = req.body.date;

  console.log(userName, title, text);

  db.query(
    "INSERT INTO posts (title, post_text, user_name, date_posted) VALUES (?,?,?,?)",
    [title, text, userName, date],
    (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
