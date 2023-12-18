import express from "express"
import { getComments,addComments } from "../controlles/commet.js";

const router = express.Router();

router.get("/" , getComments )
router.post("/" , addComments )


export default router