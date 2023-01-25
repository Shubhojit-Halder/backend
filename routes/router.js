import express from "express"
import getDataController from "../controllers/getDataController.js"
import updateDatacontroller from "../controllers/upsertDataController.js"
import weatherController from "../controllers/weatherController.js"

const router = express.Router()

router.get('/',updateDatacontroller)
router.get('/getdata',getDataController)

export default router