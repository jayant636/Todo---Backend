const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    // findByIdAndDelete -> fns provided by mongoose
    const todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Deleted Todo successfully",
      data: todo,
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
