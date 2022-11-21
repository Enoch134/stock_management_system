import express from "express";
import {
    getRequest,
    getRequestByDirectorApproved,
    getRequestByBothApproved,
    getPendingRequest,
    getRejectedRequest,
    getManagerRequest,
    getRequestDirectorPending,
    // getDirectorPendingRequest,
    getAdminRequest,
    getRequestById,
    createRequest,
    updateRequest,
    updateDirectorRequest,
    deleteRequest,



    // user Route Setting Start here
    getManagerRequestApproved,
    getManagerRequestPending,
    getManagerRequestRejected,
    getDirectorRequestPending,
    getRequestByDirector,
    // User Routing End Here



    // Director Request Router Start Here
    getDirectorRequestAll,
    getDirectorRequestPendingAll,
    getDirectorRequestRejectAll,
    // Director Request Router End Here





    // Manager Route Setting Start here
    getRequestByManagerReqApproved,
    getRequestByManagerReqPending,
    getRequestByManageRejected,
    getRequestDirectorReqPending,
    getRequestDirectorReqRejected,
    getManagerRequestAll
    // Manager Routing End Here



} from "../controllers/Request.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/request', verifyUser, getRequest);
router.get('/requestByDirectorApproved', verifyUser, getRequestByDirectorApproved);
router.get('/requestByBothApproved', verifyUser, getRequestByBothApproved);
router.get('/rejectedRequest', verifyUser, getRejectedRequest);
router.get('/managerRequest', verifyUser, getManagerRequest);
router.get('/adminRequest', verifyUser, getAdminRequest);
router.get('/request/:id', verifyUser, getRequestById);
router.get('/pendingRequest', verifyUser, getPendingRequest);
router.get('/requestDirectorPending', verifyUser, getRequestDirectorPending);
// router.get('/directorPendingRequest', verifyUser, getDirectorPendingRequest);
router.post('/request', verifyUser, createRequest);
router.patch('/request/:id', verifyUser, updateRequest);
router.patch('/directorRequest/:id', verifyUser, updateDirectorRequest);
router.delete('/request/:id', verifyUser, deleteRequest);


// For user Start Here
router.get('/managerRequestApproved', verifyUser, getManagerRequestApproved);
router.get('/managerRequestPending', verifyUser, getManagerRequestPending);
router.get('/managerRequestRejected', verifyUser, getManagerRequestRejected);
router.get('/directorRequestPending', verifyUser, getDirectorRequestPending);
router.get('/requestByDirector', verifyUser, getRequestByDirector);
// For User End Here



// Director Request Router Start Here
router.get('/directorRequestAll', verifyUser, getDirectorRequestAll);
router.get('/directorRequestPendingAll', verifyUser, getDirectorRequestPendingAll);
router.get('/directorRequestRejectAll', verifyUser, getDirectorRequestRejectAll);
// Director Request Router End Here



// For user Start Here
router.get('/requestByManagerReqApproved', verifyUser, getRequestByManagerReqApproved);
router.get('/requestByManagerReqPending', verifyUser, getRequestByManagerReqPending);
router.get('/requestByManageRejected', verifyUser, getRequestByManageRejected);
router.get('/requestDirectorReqPending', verifyUser, getRequestDirectorReqPending);
router.get('/requestDirectorReqRejected', verifyUser, getRequestDirectorReqRejected);
router.get('/managerRequestAll', verifyUser, getManagerRequestAll);
// For User End Here




// router.get('/request', getRequest);
// router.get('/request/:id',  getRequestById);
// router.post('/request',  createRequest);
// router.patch('/request/:id',  updateRequest);
// router.delete('/request/:id',  deleteRequest);

export default router;