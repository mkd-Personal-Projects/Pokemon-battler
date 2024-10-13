# **Pokemon Battler**

## **Description**

This is a pokemon themed game built using next.js and the T3 stack, and can be viewed/played here: [Hosted link WIP](). To run this project locally: 

# **Setup Instructions**

### **Installation requirements:**

- Node.js 17.x
- psql 14.x

All other application dependencies are listed in the `package.json` file, FYI.

### **Cloning the repositry:**

- In your teminal CLI:

```
$ git clone https://github.com/mkd-Personal-Projects/Pokemon-battler.git
$ cd Pokemon-battler
```

### **Installing dependencies:**

- The required dependencies will be pulled from the `package.json` file along with their minimum versions. In your teminal CLI:

```
$ npm install
```

### **Environment setup:**

 - You will need to create a .env file with the following inside: 
(Making sure to replace `<username>` and `<password>` with your psql username and password)

```
DB_ENDPOINT=localhost
DB_USERNAME=<username>
DB_PORT=5432
DB_NAME=ts_pokemon
DB_PASSWORD=<password>
DATABASE_URL="postgresql://<username>@localhost:5432/ts_pokemon"
NODE_ENV=development
```

### **Scripts:**
 - You will then need to run the following scripts to run this project locally:

```
npm run setup-dbs
npm run seed
npx prisma migrate dev
npm run dev
```
