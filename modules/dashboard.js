const mongo = require("./../db");

module.exports.totalCustomer = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("customer").find().toArray();
    res.status(200).send({ count: resp.length });
  } catch (err) {
    console.log(err);
  }
};

module.exports.todayCustomer = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("record").find().toArray();
    let ans = resp.filter((ele) => {
      return (
        new Date(ele.date).toLocaleDateString() ===
        new Date().toLocaleDateString()
      );
    });
    ans = ans.reduce((acc, ele) => acc.concat(ele.customer_id), []);
    res.status(200).send({ count: [...new Set(ans)]?.length });
  } catch (err) {
    console.log(err);
  }
};

module.exports.buyPrice = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("record").find().toArray();
    let ans = resp.filter((ele) => {
      return (
        new Date(ele.date).toLocaleDateString() ===
        new Date().toLocaleDateString()
      );
    });
    ans = ans.reduce((acc, ele) => (acc += +ele.buy_price), 0);
    res.status(200).send({ price: ans });
  } catch (err) {
    console.log(err);
  }
};

module.exports.sellPrice = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("record").find().toArray();
    let ans = resp.filter((ele) => {
      return (
        new Date(ele.date).toLocaleDateString() ===
        new Date().toLocaleDateString()
      );
    });
    ans = ans.reduce((acc, ele) => (acc += +ele.sell_price), 0);
    res.status(200).send({ price: ans });
  } catch (err) {
    console.log(err);
  }
};

module.exports.cowQuantity = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("record").find().toArray();
    let ans = resp.filter((ele) => {
      return (
        new Date(ele.date).toLocaleDateString() ===
          new Date().toLocaleDateString() && ele.milktype === "cow"
      );
    });
    ans = ans.reduce((acc, ele) => (acc += +ele.quantity), 0);
    res.status(200).send({ quantity: ans });
  } catch (err) {
    console.log(err);
  }
};

module.exports.buffaloQuantity = async (req, res, next) => {
  try {
    const resp = await mongo.selectedDB.collection("record").find().toArray();
    let ans = resp.filter((ele) => {
      return (
        new Date(ele.date).toLocaleDateString() ===
          new Date().toLocaleDateString() && ele.milktype === "buffalo"
      );
    });
    ans = ans.reduce((acc, ele) => (acc += +ele.quantity), 0);
    res.status(200).send({ quantity: ans });
  } catch (err) {
    console.log(err);
  }
};
