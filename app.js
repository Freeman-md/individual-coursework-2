const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");

const app = express();

app.use(express.static("public"));
app.use(cors());

app.use((err, req, res, next) => {
  console.log("Error: ", err);
  res.status(500).send("An error occurred, please try again later.");
});

connectToDb()
  .then(() => {
    app.listen(process.env.APP_PORT || 3000, () =>
      console.log("Server is running")
    );
  })
  .catch((err) => {
    console.log("Error starting server: ", err);
  });

app.get("/lessons", async (req, res, next) => {
  try {
    const db = getDb();
    const collection = db.collection("lessons");
    const items = await collection.find({}).toArray();
    res.send(items);
  } catch (err) {
    next(err);
  }
});
