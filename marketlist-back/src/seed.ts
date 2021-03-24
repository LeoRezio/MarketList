import { Seeder } from "mongoose-seed-2";
import Products from "./model/Products";
// 1. import models, so they register in mongoose
import { products } from "./seed-data/product";
// model example:
// mongoose.model('User', new mongoose.Schema({ email: String, unique: true }));
const modelproduct = Products;
async function seed() {
  // 2. connect seeder
  const seeder = new Seeder("mongodb://localhost/marketlist");

  // 3. Pass names of models to be cleared
  await seeder.clearModels(["Products"]);

  // 4. Pass data to initialize db where key is model, and value is list of documents
  await seeder.populateModels({
    Products: products,
  });

  await seeder.disconnect();
}

seed();
