import { NextFunction, Request, Response } from "express";
import { Product, ProductModel } from "./product.model";

export const getOneProduct = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  try {
    const product = await ProductModel.findById({ _id: req.params });
    res.status(200).json(product);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};

export const addNewProduct = async (
  req: Request<{}, {}, Product>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    next(err);
  }
};

// Not sure how to find products by category
export const getProductsFromCategory = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  try {
    let { categories } = req.query;
    const productCategories = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    //if (categories) productCategories!.categories = categories;
    res.status(200).json(productCategories);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};

export const updateProductStock = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const productToBeUpdated = await ProductModel.findById(req.params.id);
  console.log(productToBeUpdated);
  try {
    let { stock } = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (stock) updatedProduct!.stock = stock;
    res.status(200).json(updatedProduct + req.params.id);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    });
    await newProduct.save();
    console.log(newProduct);
    res.status(200).json(newProduct);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};
