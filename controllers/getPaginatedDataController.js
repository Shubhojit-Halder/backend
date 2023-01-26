import WeatherModel from "../models/weatherDB.js";
const getPaginatedDataController = async (req, res) => {
  try {
    console.log("hello");
    const page = req.query.page;
    const data = await WeatherModel.find({}).limit(10).skip(page*10)
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("Error caught up.");
  }
};
export default getPaginatedDataController;
