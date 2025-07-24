const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

// Main page endpoint (lists all items)
router.get('/api/secondchance/main', async (req, res) => {
    const db = await connectToDatabase();
    const items = await db.collection('items').find().toArray();
    res.json(items);
});

module.exports = router;
