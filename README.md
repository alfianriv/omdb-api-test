# OMDB API Test

OMDB API is a nodejs express application for searching movies from OMDB.

## Installation

Use the package manager to install app.

```bash
yarn install
```
or
```bash
npm install
```

Create .env file with the value:
```bash
MYSQLURL=mysql://root:password@localhost:3306/omdb-test
API_KEY=xxxxxxx
```

## Usage

```python
# migrate tables to database
npx prisma migrate

# generate prisma orm
npx prisma generate

# run application
yarn dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)