const express = require("express");

const db = require("./config/db");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {});

app.post("/create", (req, res) => {
  db.query(
    "INSERT INTO POSTS (title, post_text, user_name) VALUES ()",
    (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(results);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
