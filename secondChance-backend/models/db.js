const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/secondChance';
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db();
}

module.exports = { connectToDatabase };
