const express = require('express');
const app = express();
const secondChanceItemsRoutes = require('./routes/secondChanceItemsRoutes');
const searchRoutes = require('./routes/searchRoutes');
const registerRoutes = require('./routes/registerRoutes');
const itemDetailsRoutes = require('./routes/itemDetailsRoutes');
const mainPageRoutes = require('./routes/mainPageRoutes');
const landingPageRoutes = require('./routes/landingPageRoutes');
const searchResultsRoutes = require('./routes/searchResultsRoutes');
const cicdRoutes = require('./routes/cicdRoutes');

app.use(express.json());
app.use(secondChanceItemsRoutes);
app.use(searchRoutes);
app.use(registerRoutes);

app.use(itemDetailsRoutes);
app.use(mainPageRoutes);
app.use(landingPageRoutes);
app.use(searchResultsRoutes);
app.use(cicdRoutes);

// Route for search
app.get('/api/secondchance/search', searchRoutes);

// Simulate navbar username display
app.get('/api/secondchance/user', (req, res) => {
    res.json({ username: 'testuser' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
