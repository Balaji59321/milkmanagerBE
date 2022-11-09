const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");

const record = require("./router/addRecord");
const user = require("./router/user");
const dashboard = require("./router/dashboard");

dotenv.config();
db.connect();
app.use(cors());

app.use(express.json());

// inbuild middleware
app.use("/", (req, res, next) => {
  next();
});

app.use("/record", record);
app.use("/user", user);
app.use("/dashboard", dashboard);

app.listen(process.env.PORT || 3010, () => {
  console.log("Server Running on a port and listening" + process.env.PORT);
});
