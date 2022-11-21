import express from "express";

import {Login, logOut,  changePassword, forgotPassword, sendEmailLink, Me} from "../controllers/Auth.js";

const router = express.Router();

// send password link
router.post('/sendpasswordlink', sendEmailLink);

// check and verify user with id and token in react 
router.get('/forgotpassword/:id/:token', forgotPassword);


// add post request to send new password from react to backend
router.post('/changepassword/:id/:token', changePassword);




router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);

export default router;