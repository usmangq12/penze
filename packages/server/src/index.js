const express = require("express");

const port = 5000;

const app = express();

app.listen(port, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", port);
});
