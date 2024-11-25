
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ticscode:c0d1n6F0rL1f31996.@ticscode.cygm3.mongodb.net/?retryWrites=true&w=majority&appName=ticscode";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const conn = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



