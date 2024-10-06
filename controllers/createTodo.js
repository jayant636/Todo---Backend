// import in Backend
const Todo = require("../models/todo");

// It contains the business logic
//define route handler
// Another way of exporting function
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;
    //create a new todo obj and insert in db
    const response = await Todo.create({ title, description });

    //   Send a json response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry added successfully",
    });
  } catch (err) {
    console.error(err);
    console, log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
