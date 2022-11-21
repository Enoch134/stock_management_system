import express from "express";
import {
    getStock,
    getStockById,
    saveStock,
    updateStock,
    deleteStock,
    
} from "../controllers/Stock.js";
// import { verifyUser,} from "../middleware/AuthUser.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/stock', verifyUser, adminOnly, getStock);
router.get('/stock/:id', verifyUser, adminOnly, getStockById);
router.post('/stock',verifyUser, adminOnly, saveStock);
router.patch('/stock/:id', verifyUser, adminOnly, updateStock);
router.delete('/stock/:id', verifyUser, adminOnly, deleteStock);


// router.get('/users',  getUsers);
// router.get('/users/:id',   getUserById);
// router.post('/users',  createUser);
// router.patch('/users/:id',   updateUser);
// router.delete('/users/:id',   deleteUser);

export default router;