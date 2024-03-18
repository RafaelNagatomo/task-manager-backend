const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;