import connectDB from "../_db/connect-db";
import { Product } from "../_db/models/Products";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try{
        if(req.query.category){
          const product= await Product.find({category: req.query.category});
          res.status(200).json(product);
        } else if (req.query.category){
          const product= await Product.find({name: req.query.name});
          res.status(200).json(product);
        } else if (req.query.category){
          const product= await Product.find({detail: req.query.details});
          res.status(200).json(product);
        } else {
        const products= await Product.find({});
        res.status(200).json(products);
        }
      } catch (error) {
        res.status(500).json({error: error.message});

      } 
    break;
    case "POST":
      try{
         const newProduct= new Product[{
          name: req.body.name,
          category: req.body.category,
          detail: req.body.detail,
         }];
         await newProduct.save(newProduct);
        }
        catch(error){
        res.status(500).json({error: error.message});
        }
    break;
    default:
      return res.status(400).json({ error: "method not supported" });
  }
}

export default connectDB(handler);