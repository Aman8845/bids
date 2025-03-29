import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => {
      console.log(`Error connecting to database: ${err}`);
    });
};
