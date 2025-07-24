const express = require('express');
const router = express.Router();

// Landing page endpoint
router.get('/api/secondchance/landing', (req, res) => {
    res.json({ message: 'Welcome to SecondChance!', url: 'https://your-deployment-url.com' });
});

module.exports = router;
