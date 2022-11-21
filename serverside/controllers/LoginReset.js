import LoginReset from "../models/LoginResetModel.js";
import User from "../models/UserModel.js";




export const getLoginReset = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await LoginReset.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'staffid']
                }]
            });
        }
        else {
            response = await LoginReset.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                where: [{
                    userId: req.userId,

                }],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}



export const createLoginReset = async (req, res) => {
    const { staffid, staffName, email, location, ipAddress, loginTime } = req.body;
    try {
        await LoginReset.create({
            staffid: staffid,
            staffName: staffName,
            email: email,
            ipAddress: ipAddress,
            location: location,
            loginTime: loginTime,


            userId: req.userId
        });
        res.status(201).json({ msg: "Request Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}