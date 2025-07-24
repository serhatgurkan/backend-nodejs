const express = require('express');
const router = express.Router();

// Register endpoint
router.post('/api/secondchance/register', async (req, res) => {
    // Simulate user registration
    res.json({ user: req.body });
});

module.exports = router;
