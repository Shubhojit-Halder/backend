import mongoose from "mongoose";
const WeatherSchema = new mongoose.Schema({
  // lat: {
  //   type: Number,
  //   required: true,
  // },
  // lon: {
  //   type: Number,
  //   required: true,
  // },
  coord: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  main: {
    type: Object,
    required: true,
  },
});

const WeatherModel = new mongoose.model("weatherdata", WeatherSchema);

export default WeatherModel;
