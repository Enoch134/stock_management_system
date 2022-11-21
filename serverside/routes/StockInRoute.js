import express from "express";
import {
    getStockIn,
    getStockInId,
    createStockIn,
    updateStockIn,
    deleteStockIn,
    upload
} from "../controllers/StockIn.js";
// import { verifyUser,} from "../middleware/AuthUser.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/stockIn', verifyUser, adminOnly, getStockIn);
router.get('/stockIn/:id', verifyUser, adminOnly, getStockInId);
router.post('/stockIn', upload, verifyUser, adminOnly, createStockIn);
router.patch('/stockIn/:id', verifyUser, adminOnly, updateStockIn);
router.delete('/stockIn/:id', verifyUser, adminOnly, deleteStockIn);


// router.get('/users',  getUsers);
// router.get('/users/:id',   getUserById);
// router.post('/users',  createUser);
// router.patch('/users/:id',   updateUser);
// router.delete('/users/:id',   deleteUser);

export default router;