require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, (error) => {
  if (error) console.log(error);
  else console.log("Connected to Database of ECE Society");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

// Routes-------------------------

const authRoute = require("./routes/authRoutes");
app.use("/auth", authRoute);

const Routes = require("./routes/routes");
app.use("/", Routes.alumniRoutes);
app.use("/", Routes.developerRoutes);
app.use("/", Routes.eventRoutes);
app.use("/", Routes.facultyRoutes);
app.use("/", Routes.memberRoutes);
app.use("/", Routes.societyRoutes);

//-----------------------------------------------------
const port = 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
