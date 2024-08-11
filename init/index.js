const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    // category: Array.isArray(obj.category) ? obj.category[0] : obj.category, // Convert to string if it's an arrays

    owner: "66ace95eff4ec61d9944e6d4",
  }));
  await Listing.insertMany(initData.data);
  console.log("data is initialized");
};

initDB();
