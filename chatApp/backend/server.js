const colors = require("colors");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
const userRoutes = require("../backend/routes/userRoutes");
const chatRoutes = require("../backend/routes/chatRoutes");

const {
  notFound,
  errorHandler,
} = require("../backend/middleware/errorMiddleware");

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
