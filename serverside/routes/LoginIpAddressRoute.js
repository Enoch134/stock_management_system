import express from "express";
import {
    getLoginIpAddress,
    getLoginIpAddressById,
    createLoginIpAddress

} from "../controllers/LoginIpAddress.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/loginIpAddress', verifyUser, getLoginIpAddress);
router.get('/loginIpAddress/:id', verifyUser, getLoginIpAddressById);
router.post('/loginIpAddress', createLoginIpAddress);

export default router;