const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/product', protect, addProduct);
router.get('/products', getAllProducts);

module.exports = router;
