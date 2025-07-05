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



Run:

bash
Copy code
node index.js
```
