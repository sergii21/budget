const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const transactions = require("./routes/transactions");
const balance = require("./routes/balance");
const connectDB = require("./db");
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(morgan());
app.use(express.json());
app.use(cors());

app.use("/api/v1/transactions", transactions);
app.use("/api/v1/balance", balance);

const port = process.env.PORT || 3000;
const server = app.listen(port, console.log(`Server started on port ${port}`));

// process.on("unhandledRejection", (err) => {
//   console.error("Unhandled Rejection1: " + err.message);
//   server.close(() => process.exit(1));
// });
      