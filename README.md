# SecondChance Backend Node.js Capstone

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up MongoDB and import sample data:
   ```bash
   mongoimport --db secondChance --collection items --file secondChance-backend/items-sample.json --jsonArray
   ```
3. Start the backend server:
   ```bash
   node secondChance-backend/app.js
   ```

## API Endpoints
- `GET /api/secondchance/items` - List all items
- `GET /api/secondchance/items/:id` - Get item by ID
- `POST /api/secondchance/items` - Add new item
- `POST /api/secondchance/items/upload` - Upload a file
- `DELETE /api/secondchance/items/:id` - Delete item by ID
- `GET /api/secondchance/search?category=...` - Search items by category

## Sentiment Analysis
- See `sentiment/index.js` for usage of the `natural` npm package

## User Stories
- See `.github/ISSUE_TEMPLATE` for user stories with required labels
