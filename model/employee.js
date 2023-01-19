const mongoose = require("mongoose");
const employeeModel = mongoose.model("employees", {
  FirstName: { type: String },
  LastName: { type: String },
  Age: { type: String },
  Email: { type: String },
  Date: { type: String },
  Addre: { type: String },
});
module.exports = employeeModel;
