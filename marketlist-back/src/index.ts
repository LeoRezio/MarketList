import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

mongoose
  .connect("mongodb://localhost/marketlist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Its Alive!");
  })
  .catch((err) => {
    console.log("Deu Ruim");
    console.log(err);
  });

app.listen(3000, () => {
  console.log("ITS WORKING");
});
