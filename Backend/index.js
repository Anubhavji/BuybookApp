import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/book.route.js";
import UserRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// coonect to mongodb
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error :", error);
}

// defining route
app.use("/book", router);
app.use("/user", UserRoute);

app.listen(port, () => {
  console.log(`Server is  listening on port ${port}`);
});
