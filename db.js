const { MongoClient } = require("mongodb");

module.exports = {
  selectedDB: {},
  async connect() {
    try {
      const resp = await MongoClient.connect("mongodb://localhost:27017");
      this.selectedDB = resp.db("milk");
    } catch (err) {
      console.log(err);
    }
  },
};
