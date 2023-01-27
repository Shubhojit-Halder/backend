import axios from "axios";
import WeatherModel from "../models/weatherDB.js";
import { locations } from "../Static/locations.js";

//Not using this code made for testing then shifted this to app.js inside set interval
const upsertData = async (req, res) => {
  try {
    for (var i = 0; i < locations.length; i++) {
      const apiData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&appid=a96360603bfc573d231821507d4ee9de&units=metric`
      );
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
    }
    console.log("updated");
    res.status(200).send("Updated");
  } catch (error) {
    console.log(error);
    res.status(401).send("An error has been encountered");
  }
};
export default upsertData;
