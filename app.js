const express = require("express");
const app = express();
const tasks = require("./api/routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is work on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
