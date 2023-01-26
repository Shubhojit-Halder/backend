import express from "express"
import getDataController from "../controllers/getDataController.js"
import getPaginatedDataController from "../controllers/getPaginatedDataController.js"
import updateDatacontroller from "../controllers/upsertDataController.js"
import weatherController from "../controllers/weatherController.js"

const router = express.Router()

router.post('/',updateDatacontroller)
router.get('/get',getPaginatedDataController)
router.get('/getdata',getDataController)

export default router