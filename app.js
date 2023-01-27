import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import ConnectDB from "./db/connectDB.js";
import axios from "axios";
import { locations } from "./Static/locations.js";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/weatherdata";
ConnectDB(DATABASE_URL);

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.use(router);
app.listen(port, () => {
  console.log(`listening to port ${port} at http://localhost:${port}`);
});

setInterval(() => {
  for (var i = 0; i < locations.length; i++) {
    const apiData = axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&appid=a96360603bfc573d231821507d4ee9de&units=metric`
      )
      .then(() => {
        const singleData = {
          coord: apiData.data.coord,
          name: apiData.data.name,
          main: apiData.data.main,
          weather: apiData.data.weather[0],
        };
        const update = WeatherModel.replaceOne(
          { name: apiData.data.name },
          singleData,
          { upsert: true }
        );
        console.log("setinterval")
      })
      .catch((err) => {
        console.log(`${err} at set`);
      })
  }
}, 120000);
