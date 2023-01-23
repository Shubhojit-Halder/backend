import express from "express";
import router from "./routes/router.js";
import ConnectDB from "./db/connectDB.js";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/weatherdata";
ConnectDB(DATABASE_URL);
const app = express();
const port = process.env.PORT || 8000;

app.use(router);
app.listen(port, () => {
  console.log(`listening to port ${port} at http://localhost:${port}`);
});
