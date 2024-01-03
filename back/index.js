const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserModel = require("./models/userdata");

const app = express();
app.use(cors());
app.use(express.json());

let port = 8000;

app.post("/add", (req, res) => {
  const userdata = req.body.data;
  UserModel.create({
    username: userdata.username,
    email: userdata.email,
    password: userdata.password,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.put("/put/:id", (req, res) => {
  const { id } = req.params;
  const userdata = req.body.data;
  UserModel.findByIdAndUpdate({ _id: id }, userdata)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

app.get("/get", (req, res) => {
  UserModel.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("", (req, res) => {
  res.send("data from backend");
});

app.listen(port, (err) => {
  if (!port) {
    console.log(err);
  } else {
    console.log(`server running successfully at port no ${port}`);
  }
});
