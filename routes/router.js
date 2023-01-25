import express from "express"
import getDataController from "../controllers/getDataController.js"
import weatherController from "../controllers/weatherController.js"

const router = express.Router()

router.get('/',weatherController)
router.get('/getdata',getDataController)

export default router