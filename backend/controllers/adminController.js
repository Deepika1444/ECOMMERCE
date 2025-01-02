const Product = require('../models/Product');

// Add a Product
const addProduct = async (req, res) => {
  const { name, description, price, stock, image } = req.body;

  try {
    const product = new Product({ name, description, price, stock, image });
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProduct, getAllProducts };
