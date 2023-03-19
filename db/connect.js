const mongoose = require("mongoose");
// const uri=mongodb+srv://arrajashu:arrajashu@cluster0.5c3cdbw.mongodb.net/test?authSource=admin&replicaSet=atlas-14h1jn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
const connectDB = (uri) => {
  console.log("connect db");
  return mongoose.connect("mongodb+srv://arrajashu:arrajashu@cluster0.5c3cdbw.mongodb.net/test?authSource=admin&replicaSet=atlas-14h1jn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
