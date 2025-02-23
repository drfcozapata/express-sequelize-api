# RESTful API with Login using Node, Express, Sequelize, JWT and MySQL

RESTful API developed to serve TeamTalk Web App using Node.js, Express.js, Sequelize and MySQL with JWT Auth Login.

## Tech Dependencies

- Node 22.12.0
- Bcryptjs 3.0.2
- Body-parser 1.20.3
- Cors 2.8.5
- Dotenv 16.4.7
- Express 4.21.2
- JsonWebToken 9.0.2
- Mysql2 3.12.0
- Sequelize 6.37.5

## Installation

```
  npm install
```

## Development Execution

Create `express_sequelize_api` database. Then:

```
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  npm run dev
```
