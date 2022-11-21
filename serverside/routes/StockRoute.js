import express from "express";
import {
    getStock,
    getStockInUse,
    getStockNotInUse,
    getStockId,
    getAllStock,
    saveStock,
    updateStock,
    deleteStock,
    // upload
} from "../controllers/Stock.js";
// import { verifyUser,} from "../middleware/AuthUser.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/stock', verifyUser, adminOnly, getStock);
router.get('/allStock', verifyUser, adminOnly, getAllStock);
router.get('/stockInUse', verifyUser, adminOnly, getStockInUse);
router.get('/stockNotInUse', verifyUser, adminOnly, getStockNotInUse);
router.get('/stock/:id', verifyUser, adminOnly, getStockId);
router.post('/stock', verifyUser, adminOnly, saveStock);
router.patch('/stock/:id', verifyUser, adminOnly, updateStock);
router.delete('/stock/:id', verifyUser, adminOnly, deleteStock);


// router.get('/users',  getUsers);
// router.get('/users/:id',   getUserById);
// router.post('/users',  createUser);
// router.patch('/users/:id',   updateUser);
// router.delete('/users/:id',   deleteUser);

export default router;