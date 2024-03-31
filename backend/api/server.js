const express = require("express");
const cors = require("cors");
const databaseRoute = require("../api/routes/databaseRoute");


const animalRoute = require("../api/routes/animalRoute");
const userRoute = require("../api/routes/userRoute");
const cabinetRoute = require("../api/routes/cabinetRoute");
const appointmentRoute = require("../api/routes/appointmentRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/database", databaseRoute);

app.use("/animal", animalRoute);
app.use("/user", userRoute);
app.use("/cabinet", cabinetRoute);
app.use("/appointment", appointmentRoute);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
