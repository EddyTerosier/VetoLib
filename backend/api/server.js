const express = require("express");
const cors = require("cors");
const databaseRoute = require("../api/routes/databaseRoute");
const userRoute = require('../api/routes/userRoute')
const cabinetRoute = require('../api/routes/cabinetRoute')
const app = express();

app.use(express.json());
app.use(cors());

app.use("/database", databaseRoute);
app.use('/user', userRoute)
app.use('/cabinet', cabinetRoute)

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
