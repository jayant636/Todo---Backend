// import in Backend
const Todo = require("../models/todo");

// For fetching all the items
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from db
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo has been fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error fetching",
    });
  }
};

// For fetching single item
exports.getTodobyId = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Id found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Data successfully send",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error fetching",
    });
  }
};
