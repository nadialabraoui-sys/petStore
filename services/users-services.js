const {User} = require("../models/User");
const {MongoClient, ObjectId} = require('mongodb');

const URI = "mongodb://admin:secret@127.0.0.1:27017";
const DB_NAME = "petstore";
const COLLECTION = "usuario";

class UserServices {
  static async get() {

    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(DB_NAME);
      const collection = database.collection(COLLECTION);

      const allRows = await collection.find().toArray();

      return allRows;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
    const client = new MongoClient(URI);
    try {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }

      await client.connect();
      const database = client.db(DB_NAME);
      const collection = database.collection(COLLECTION);

      return await collection.findOne({_id: new ObjectId(id)});

    } finally {
      await client.close();
    }
  }

  static async post(email, password) {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const database = client.db(DB_NAME);
      const collection = database.collection(COLLECTION);

      const item = new User(email, password);

      if(item === undefined || item === null || item === "" || item === false) {
        console.log("No hay encontrado");
      }
      return await collection.insertOne(item);

    } finally {
      await client.close();
    }

  }


  static async delete(id) {
    const client = new MongoClient(URI);
    try {
      if (!ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      await client.connect();
      const database = client.db(DB_NAME);
      const collection = database.collection(COLLECTION);


      return await collection.deleteOne({_id: new ObjectId(id)});

    } finally {
      await client.close();
    }
  }

  static async update(email, password) {
    const client = new MongoClient(URI);
    try {

      if (!ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      await client.connect();
      const database = client.db(DB_NAME);
      const collection = database.collection(COLLECTION);

      new User(email, password);

      return await collection.updateOne({_id: new ObjectId(id)}, {$set: {email: email, password: password}});

    } finally {
      await client.close();
    }
  }
}

module.exports = UserServices;
