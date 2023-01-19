const express = require("express");
const { json } = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeeModel = require("./model/employee");

const app = express();
app.use(cors());
app.use(json());

mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => console.log("Data Base is connected Successfuly"))
  .catch((err) => console.log(err));

app.post("/employees", (req, res) => {
  const newemployee = employeeModel(req.body);
  newemployee.save();
  res.send("Successfuly added jk");
});
app.get("/home", (req, res) => {
  console.log("your home path is Ready");
  res.send("your home path is Ready");
});
app.get("/employees", async (req, res) => {
  const result = await employeeModel.find({});
  res.json(result);
  console.log("show data");
});

app.post("deletecard", async (req, res) => {
  const result = await employeeModel.findOneAndDelete(req.body);
  res.send("delete success fully");
});

app.post("/employees", (req, res) => {
  const payload = { _id: req.body._id };
  employeeModel.findOneAndDelete(payload, (err, docs) => {
    if (err) {
      res.json(err);
    } else {
      res.json(docs);
    }
  });
});

const server = app.listen(3003, () => {
  console.log("Your server is Up");
});
