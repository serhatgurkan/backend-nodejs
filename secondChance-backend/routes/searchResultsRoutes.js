const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

// Search results endpoint
router.get('/api/secondchance/search/results', async (req, res) => {
    const db = await connectToDatabase();
    const { category, price } = req.query;
    let query = {};
    if (category) query.category = category;
    if (price) query.price = { $lte: Number(price) };
    const items = await db.collection('items').find(query).toArray();
    res.json(items);
});

module.exports = router;
