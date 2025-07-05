# User API - PostgreSQL + Express.js

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. Clone this repo or download code.
2. Run `npm install`
3. Set up PostgreSQL and create a table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);



Add .env with:
DB_USER=postgres
DB_HOST=localhost
DB_NAME=demopost
DB_PASS=oluomachi2468


Run:

bash
Copy code
node index.js
```



4. ### TEST ENDPOINTS USING NODEMAN

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/users`     | Get all users      |
| GET    | `/users/:id` | Get one user by ID |
| POST   | `/users`     | Add a new user     |
| PUT    | `/users/:id` | Update a user      |
| DELETE | `/users/:id` | Delete a user      |
