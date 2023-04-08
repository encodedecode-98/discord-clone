const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const socketServer = require('./sockerServer.js')



//socket server



const PORT = process.env.PORT || process.env.API_PORT;
console.log("PORT" + PORT);
const authRoutes = require('./routes/authRoutes')

const app = express();
app.use(express.json());
app.use(cors());

//register route
app.use('/api/auth',authRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);


// mongoose connect with db
require('./db/db')

// listening to port 
server.listen(PORT, () => {
  console.log("Listening on port : " + PORT);
});  

