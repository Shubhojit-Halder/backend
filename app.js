import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import ConnectDB from "./db/connectDB.js";
import axios from "axios";
import { locations } from "./Static/locations.js";
import WeatherModel from "./models/weatherDB.js";

//connection to database
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/weatherdata";
const BASE_URL='https://weatheroo.onrender.com/'
ConnectDB(DATABASE_URL);


const app = express();

app.use(cors()); //to get rid of cors of error used this

const port = process.env.PORT || 8000;

app.use(router);
app.listen(port, () => {
  console.log(`listening to port ${port} at http://localhost:${port}`);
});


//inserted and updating data through this function at an interval of 5 mins
setInterval(async () => {
  for (var i = 0; i < locations.length; i++) {
    const apiData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&appid=a96360603bfc573d231821507d4ee9de&units=metric`
    );
    try {
      const singleData = {
        coord: apiData.data.coord,
        name: apiData.data.name,
        main: apiData.data.main,
        weather: apiData.data.weather[0],
      };
      const update = await WeatherModel.replaceOne(
        { name: apiData.data.name },
        singleData,
        { upsert: true }
      );
      console.log(`setinterval${i}`);
    } catch (error) {
      console.log(`${error} at set`);
    }
  }
}, 300000);
