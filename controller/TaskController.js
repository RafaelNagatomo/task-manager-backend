const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find({});
    // return res.render("index", { tasksList, task: null });
    return res.status(200).send(tasksList);
  } catch (err) {
    res.status(500).send({ error1: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error2: err.message });
  }
};

const getById = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  const tasksList = await Task.find({});
  return res.status(200).send(tasksList);
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error3: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error4: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteTask,
};
