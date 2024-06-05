const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

// MongoDB connection URI
const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@moviesitedb.dzkecdm.mongodb.net/MovieSiteDB`;

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let mongodb;

async function connectToDatabase() {
  if (!mongodb) {
    await client.connect();
    mongodb = client.db("Project-H"); // change the db name accordingly
    console.log(`[db.js] successfully made connection to db`)
  } else {
    console.log(`[db.js] already connected to db (new request not made)`)
  }
  return mongodb;
}

module.exports = connectToDatabase;