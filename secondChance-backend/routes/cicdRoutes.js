const express = require('express');
const router = express.Router();

// CI/CD status endpoint
router.get('/api/secondchance/cicd', (req, res) => {
    res.json({ status: 'CI/CD pipeline ran successfully', timestamp: new Date().toISOString() });
});

module.exports = router;
