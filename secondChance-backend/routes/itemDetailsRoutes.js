const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

// Item details endpoint
router.get('/api/secondchance/items/:id/details', async (req, res) => {
    const db = await connectToDatabase();
    const item = await db.collection('items').findOne({ _id: req.params.id });
    res.json(item);
});

module.exports = router;
