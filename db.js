const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Freemancodz:UENXZgr2RSAMkJgg@web-coursework-2.vjqikya.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect()
    .then(() => {
        console.log("Connection successful")
    })
    .catch(err => console.log(err))
    .finally(() => {
        client.close()
    })
