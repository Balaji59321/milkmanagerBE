const mongo = require("./../db");
const mondodb = require("mongodb");

module.exports.createUser = async (req, res, next) => {
  try {
    let body = {...req.body,created_by: req.user[0]._id}
    const resp = await mongo.selectedDB
      .collection("customer")
      .insertOne(body);
    res.status(201).send(resp);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    console.log(req.params);
    const resp = await mongo.selectedDB
      .collection("customer")
      .deleteOne({ _id: mondodb.ObjectId(req.params.id) });
    res.status(200).send(resp);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("customer").find({created_by : req.user[0]._id}).toArray();
    res.status(200).send(resp);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB
      .collection("customer")
      .updateOne(
        { _id: mondodb.ObjectId(req.params.id) },
        { $set: { ...req.body } }
      );
    res.status(200).send(resp);
  } catch (err) {
    console.log(err);
  }
};
