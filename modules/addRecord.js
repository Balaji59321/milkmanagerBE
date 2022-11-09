const { ObjectId } = require("mongodb");
const mongo = require("./../db");

module.exports.getAllRecords = async (req, res, next) => {
  try {
    let resp = await mongo.selectedDB.collection("record").find().toArray();
    resp.length > 0
      ? res.status(200).send(resp)
      : res.status(404).send({ code: 404, message: "No Record Found" });

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports.createRecord = async (req, res, next) => {
  try {
    let resp = await mongo.selectedDB.collection("record").insertOne(req.body);
    res.status(201).send(resp);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateRecord = async (req, res, next) => {
  try {
    let resp = await mongo.selectedDB
      .collection("record")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: { ...req.body } });
    res.status(200).send(resp);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteRecord = async (req, res, next) => {
  try {
    let resp = await mongo.selectedDB
      .collection("record")
      .deleteOne({ _id: ObjectId(req.params.id) });
    res.status(200).send(resp);
    next();
  } catch (err) {
    console.log(err);
  }
};
