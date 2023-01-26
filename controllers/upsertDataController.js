import axios from "axios";
import WeatherModel from "../models/weatherDB.js";
const updateDatacontroller = async (req, res) => {
  const locations = [
    "Kolkata",
    "Delhi",
    "Bangalore",
    "Mumbai",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Goa",
    "Surat",
    "Bhubaneswar",
    "Patna",
    "Ranchi",
    "Siliguri",
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Sylhet",
    "Rajshahi",
    "Borishal",
    "Paris",
    "London",
    "Barcelona",
    "Madrid",
    "Amsterdam",
    "Rome",
    "Munich",
    "Zurich",
    "Milan",
    "Berlin",
    "Istanbul"
  ];
  try {
    for (var i = 0; i < locations.length; i++) {
      const apidata = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&appid=a96360603bfc573d231821507d4ee9de&units=metric`
      );
      //   console.log(apidata.data.coord);
      const singleData = {
        coord: apidata.data.coord,
        name: apidata.data.name,
        main: apidata.data.main,
        weather:apidata.data.weather[0]

      };
      const update = await WeatherModel.replaceOne(
        { name: apidata.data.name },
        singleData,
        { upsert: true }
      );
    }

    res.status(200).send("lol");
  } catch (error) {
    console.log(error);
  }
};
export default updateDatacontroller