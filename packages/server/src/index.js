const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes");
const port = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mongoose
  .connect("mongodb+srv://usmangq:penze123@cluster0.cjt6jmi.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error", err));

app.use(router);

app.listen(port, () => {
  console.log("Server is running at port 5000");
});
