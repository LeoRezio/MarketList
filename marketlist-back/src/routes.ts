import { request, Request, Response, Router } from "express";
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

router.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await Products.findByIdAndUpdate(id, {
    ...request.body,
  });
  const products = await Products.find({});
  response.json(products);
});

router.delete("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await Products.findByIdAndDelete(id);
  const products = await Products.find({});
  response.json(products);
});

export { router };
