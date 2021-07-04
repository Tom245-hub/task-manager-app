const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./db/mongoose");
const usersRoutes = require("./routes/users");
const { passport } = require("./db/passport");

const server = express();

passport();

server.use(bodyParser.json());
server.use(cors());

server.use("/users", usersRoutes);

server.listen(8000, () => console.log("Server is started."));
