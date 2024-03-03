const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});
const mainRouter = require("./routes/index")
const app = express();
const port =process.env.PORT

app.use(cors())
app.use(express.json());

app.use("/api/v1",mainRouter)

app.listen(port, ()=>{
    console.log("server listening")
})