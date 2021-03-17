import express from "express";
import mongoose from "mongoose";
//import { router } from "./routes";
const app = express();

app.use(express.json());
//app.use(router);

mongoose
  .connect("mongodb://localhost/byTolinhasDB", {
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
