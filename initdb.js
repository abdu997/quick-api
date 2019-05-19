
// TO START MONGOD SERVER 
// sudo mongod --dbpath=/Users/amoud/Desktop/FormBuilder-node/data
// 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  var dbo = db.db("quickApi");
  dbo.createCollection("forms", (err, res) => {
    if (err) throw err
    console.log("forms created!");
    db.close();
  });
  dbo.createCollection("formVersions", (err, res) => {
    if (err) throw err
    console.log("formVersions created!");
    db.close();
  });
  dbo.createCollection("submissions", (err, res) => {
    if (err) throw err
    console.log("submissions created!")
    db.close()
  });
  console.log("Database setup!")
});
