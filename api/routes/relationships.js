import express from "express"
import { getRelationships,addRelationship,deleteRelationship } from "../controlles/relationship.js";

const router = express.Router();

router.get("/" ,getRelationships)
router.post("/" ,addRelationship)
router.delete("/" ,deleteRelationship)


export default router