import mongoose from "mongoose";
const ConnectDB = (DATABASE_URL) => {
  try {
    mongoose.connect(DATABASE_URL, () => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log(`DB error:${error}`);
  }
};
export default ConnectDB;
