const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

connectToDatabase();

router.get('/api/secondchance/items', async (req, res) => {
    const db = await connectToDatabase();
    const items = await db.collection('items').find().toArray();
    res.json(items);
});

router.get('/api/secondchance/items/:id', async (req, res) => {
    const db = await connectToDatabase();
    const item = await db.collection('items').findOne({ _id: req.params.id });
    res.json(item);
});

router.post('/api/secondchance/items/upload', upload.single('file'), async (req, res) => {
    res.json({ file: req.file });
});

router.post('/api/secondchance/items', async (req, res) => {
    const db = await connectToDatabase();
    const result = await db.collection('items').insertOne(req.body);
    res.json(result);
});

router.delete('/api/secondchance/items/:id', async (req, res) => {
    const db = await connectToDatabase();
    const result = await db.collection('items').deleteOne({ _id: req.params.id });
    res.json(result);
});

module.exports = router;
