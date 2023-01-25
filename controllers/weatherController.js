import axios from "axios";
import WeatherModel from "../models/weatherDB.js";
const weatherController = async (req, res) => {
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
    "Siliguri",
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rangpur",
    "Sylhet",
    "Rajshahi",
    "Barishal",
    "Mymensingh"
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
      };
      const unit = new WeatherModel(singleData);
      console.log(unit);
      await unit.save();
    }

    res.status(200).send("hi");
  } catch (error) {
    console.log(error);
  }
};
export default weatherController;
