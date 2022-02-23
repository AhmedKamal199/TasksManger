const express = require("express");
const tasks = require("./api/routes/tasks");
const app = express();

// middleware

app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manger App");
});

app.use("/api/tasks", tasks);

const port = 3000;

app.listen(port, () => console.log(`Server is work on port ${port}....`));
