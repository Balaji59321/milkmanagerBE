const { MongoClient } = require("mongodb");

module.exports = {
  selectedDB: {},
  async connect() {
    try {
      const resp = await MongoClient.connect(process.env.DB);
      this.selectedDB = resp.db("milk");
    } catch (err) {
      console.log(err);
    }
  },
};
