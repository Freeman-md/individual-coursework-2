const { MongoClient, ServerApiVersion } = require("mongodb");

let connection;

const uri = 'mongodb+srv://Freemancodz:UENXZgr2RSAMkJgg@web-coursework-2.vjqikya.mongodb.net/?retryWrites=true&w=majority'

const connectToDb = async () => {
    try {
      connection = await MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, }
      );
      console.log("Connected to MongoDB Atlas");
    } catch (err) {
      console.log("Error connecting to MongoDB Atlas: ", err);
      throw err;
    }
};

const getDb = () => {
    if (!connection) {
      throw new Error("Call connectToDb() before calling getDb()");
    }
    return connection.db('coursework');
  };

  module.exports = { connectToDb, getDb }
