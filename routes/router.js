import express from "express";
import getDataController from "../controllers/getDataController.js";
import getPaginatedDataController from "../controllers/getPaginatedDataController.js";
import upsertData from "../controllers/upsertDataController.js";

const router = express.Router();

router.post("/", upsertData);
router.get("/get", getPaginatedDataController);
router.get("/getdata", getDataController);

export default router;
