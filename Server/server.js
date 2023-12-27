// app.js (or server.js)
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const PatientRouter = require("./routes/PatientRoutes"); // Updated route import
const DoctorRouter = require("./routes/DoctorRoutes");
const AdminRouter = require("./routes/AdminRoutes");
const logoutRoute = require("./routes/logoutRoute");


const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handeler");

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send('<h1>Hello from the server!</h1> <a href="/api/v1/patients">patients route</a>');
});

app.use("/api/auth",authRoutes);
app.use("/api/patient", PatientRouter); // Updated route path
app.use("/api/doctor",DoctorRouter);
app.use(AdminRouter);
app.use(logoutRoute);
// app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
