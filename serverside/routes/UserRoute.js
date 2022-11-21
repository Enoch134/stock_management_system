import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    changePassword, forgotPassword, sendEmailLink,
    deleteUser
} from "../controllers/Users.js";
// import { verifyUser,} from "../middleware/AuthUser.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

// send password link
router.post('/sendpasswordlink', sendEmailLink);

// check and verify user with id and token in react 
router.get('/forgotpassword/:id/:token', forgotPassword);


// add post request to send new password from react to backend
router.post('/changepassword/:id/:token', changePassword);


// router.get('/users',  getUsers);
// router.get('/users/:id',   getUserById);
// router.post('/users',  createUser);
// router.patch('/users/:id',   updateUser);
// router.delete('/users/:id',   deleteUser);

export default router;