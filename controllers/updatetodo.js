const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    // findByIdAndUpdate-> mongoose methods on the object

    const todo = await Todo.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
        updateAt: Date.now(),
      }
    );

    res.status(200).json({
      success: true,
      message: "Updated Todo successfully",
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
