const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const productRoute = require("./routes/product");
const cors = require("cors");


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.use(cors({

    origin:"http://localhost:3001",
    credentials: true,
})
)



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 2500, () => {
  console.log("Backend server is running!",process.env.PORT);
});