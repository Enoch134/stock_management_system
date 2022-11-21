import express from "express";
import {
    getList,
    // getLoginResetById,
    createList

} from "../controllers/List.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/list', verifyUser, getList);
// router.get('/loginReset/:id', verifyUser, getLoginResetById);
router.post('/list', createList);

export default router;