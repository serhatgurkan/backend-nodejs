const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

// Filter on category
router.get('/api/secondchance/search', async (req, res) => {
    const db = await connectToDatabase();
    const category = req.query.category;
    const items = await db.collection('items').find(category ? { category } : {}).toArray();
    res.json(items);
});

module.exports = router;
