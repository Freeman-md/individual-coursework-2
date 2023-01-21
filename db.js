const { MongoClient, ServerApiVersion } = require("mongodb");
const lessons = require("./lessons");

const uri =
  "mongodb+srv://Freemancodz:UENXZgr2RSAMkJgg@web-coursework-2.vjqikya.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client
  .connect()
  .then(() => {
    const db = client.db("coursework");
    const collection = db.collection("lessons");

    collection.insertMany(lessons, (err, result) => {
        if (err) console.log(err)
        else console.log(`Inserted ${result.insertedCount} items into the collection`)
    });
    
  })
  .catch((err) => console.log(err))
