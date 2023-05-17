const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Handling request for AJAX
app.post("/request", (req, res) => {
  console.log(req.body);

  res.json({
    name: req.body.name,
    email: req.body.email,
    password_recieved: req.body.pwd,
  });
});
