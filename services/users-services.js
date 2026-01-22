const uri = "mongodb://admin:secret@127.0.0.1:27017";


class UsersServices {
  static async get() {

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db("petstore");
      const collection = database.collection("users");

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
        const collection = database.collection("users");

        return await collection.findOne({_id: new ObjectId(id)});
       
      } finally {
        await client.close();
      }
    }

  static async post(email, password) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("users");

      return await collection.insertOne({email: email, password: password});

    } finally {
      await client.close();
    }

  }


  static async delete(id) {
    const client = new MongoClient(uri);
    try {
            await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("users");

      return await collection.deleteOne({_id: new ObjectId(id)});

    } finally {
      await client.close();
    }
  }

  static async update(email, password) {
    const client = new MongoClient(uri);
    try {
              await client.connect();
        const database = client.db("petstore");
        const collection = database.collection("users");

      return await collection.updateOne({_id: new ObjectId(id)}, {$set: {email: email, password: password}});

    } finally {
      await client.close();
    }
  }
}

module.exports = UsersServices;
