import express from "express"
const route = express.Router()
import { getAllrecords , createNewrecords,updateRecords,DeleteRecords } from "../controllers/studentrecordController.js";

route.get("/", getAllrecords);
route.post("/create", createNewrecords);
route.put("/update/:id", updateRecords);
route.delete("/delete/:id", DeleteRecords);

export default route;