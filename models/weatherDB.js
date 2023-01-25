import mongoose from "mongoose";
const WeatherSchema = new mongoose.Schema({
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
  weather:{
    type: Object,
    required: true,
  }
});

const WeatherModel = new mongoose.model("weatherdata", WeatherSchema);

export default WeatherModel;
