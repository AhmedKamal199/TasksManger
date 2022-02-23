const getAllTasks = (req, res) => {
  res.send("All items");
};
const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
};
