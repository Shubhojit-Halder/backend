import WeatherModel from "../models/weatherDB.js"
const getDataController = async (req,res) =>{
    
    try {
        const data = await WeatherModel.find({})
        res.status(201).send(data)
    } catch (error) {
        console.log(error)
        res.status(401).send("Error caught up.")
    }
}
export default getDataController