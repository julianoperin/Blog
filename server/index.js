const express = require("express");

const db = require("./config/db");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO posts(title, post_text, user_name) VALUES ('Promised Land','It was a great book', 'Juliano Perin')"
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
