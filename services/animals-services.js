const Animals = require("../models/Animal");
const {MongoClient, ObjectId} = require('mongodb');

const URI = "mongodb://admin:secret@127.0.0.1:27017";
const CLIENT = new MongoClient(URI);
const DB_NAME = "petstore";
const COLLECTION = "pets";



export class AnimalsServices {

  async getConnection(){
    await CLIENT.connect();
    const database = CLIENT.db(DB_NAME);
    return database.collection(COLLECTION);
  }
  static async get() {
    try {

      const collection = await getConnection();

      return await collection.find().toArray();

    } finally {
      await CLIENT.close();
    }
  }

  static async getById(id) {
      try {
        if (!ObjectId.isValid(id)) {
          throw new Error("Non valid ID");
        }

        const collection = await getConnection();

        return await collection.findOne({_id: new ObjectId(id)});
       
      } finally {
        await CLIENT.close();
      }
    }

  static async post(image, name, description, status) {
    try {
      const collection = await getConnection();

       const item = new Animals(image, name, description, status);

      return await collection.insertOne(item);

    } finally {
      await CLIENT.close();
    }

  }


  static async delete(id) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new Error("Non valid ID");
      }
      const collection = await getConnection();


      return await collection.deleteOne({_id: new ObjectId(id)});

    } finally {
      await CLIENT.close();
    }
  }

  static async update(id, image, name, description, status) {
    try {

      if (!ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      const collection = await getConnection();

        new Animals(image, name, description, status);

      return await collection.updateOne({_id: new ObjectId(id)}, {$set: {image: image, name: name, description: description, status: status}});

    } finally {
      await CLIENT.close();
    }
  }
}

module.exports = AnimalsServices;
