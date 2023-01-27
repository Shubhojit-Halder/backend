import express from "express";
import getPaginatedDataController from "../controllers/getPaginatedDataController.js";
import upsertData from "../controllers/upsertDataController.js";

const router = express.Router();

//Used express router

router.post("/", upsertData);
router.get("/get", getPaginatedDataController);


export default router;
