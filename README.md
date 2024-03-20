# Pokemon Battler

To setup this repo, firsly clone it down to your local machine then create a .env file with the following inside: 
(Making sure to replace < username > and < password > with your psql username and password)

```
DB_ENDPOINT=localhost
DB_USERNAME=< username >
DB_PORT=5432
DB_NAME=ts_pokemon
DB_PASSWORD=< password >
DATABASE_URL="postgresql://< username >@localhost:5432/ts_pokemon"
NODE_ENV=development
```

The following are scripts that also need to be run:
 - npm install
 - npm run setup-dbs
 - npm run seed
 - npx prisma migrate reset
 - npm run dev

