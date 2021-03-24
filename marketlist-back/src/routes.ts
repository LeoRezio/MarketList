import { Request, Response, Router } from "express";
import Products from "./model/Products";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const product = await Products.find({});
  response.status(201).json(product);
});

router.post("/", async (request: Request, response: Response) => {
  const newProduct = new Products(request.body);
  await newProduct.save();
  response.status(201).json(newProduct);
});

export { router };
