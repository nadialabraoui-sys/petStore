const uri = "mongodb://admin:secret@127.0.0.1:27017";


class AnimalsServices {
  static async get() {

    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("petstore");
      const collection = database.collection("pets");

      const allRows = await collection.find().toArray();

      return allRows;
    } finally {
      await client.close();
    }
  }

  static async getById(id) {
      const client = new MongoClient(uri);
      try {
        await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("pets");

        return await collection.findOne({_id: new ObjectId(id)});
       
      } finally {
        await client.close();
      }
    }

  static async post(image, name, description, status) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("pets");

      return await collection.insertOne({image: image, name: name, description: description, status: status});

    } finally {
      await client.close();
    }

  }


  static async delete(id) {
    const client = new MongoClient(uri);
    try {
            await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("pets");

      return await collection.deleteOne({_id: new ObjectId(id)});

    } finally {
      await client.close();
    }
  }

  static async update(image, name, description, status) {
    const client = new MongoClient(uri);
    try {
              await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("pets");

      return await collection.updateOne({_id: new ObjectId(id)}, {$set: {image: image, name: name, description: description, status: status}});

    } finally {
      await client.close();
    }
  }
}

module.exports = AnimalsServices;
