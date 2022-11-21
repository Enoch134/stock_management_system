import List from "../models/ListModel.js";
import User from "../models/UserModel.js";




export const getList = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await List.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'staffid']
                }]
            });
        }
        else {
            response = await List.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                where: [{
                    userId: req.userId,

                }],
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'staffid']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}







export const createList = async (req, res) => {
    const { staffid, staffName, email, location, ipAddress, loginTime } = req.body;
    try {
        await List.create({
            staffid: staffid,
            staffName: staffName,
            email: email,
            ipAddress: ipAddress,
            location: location,
            loginTime: loginTime,


            // userId: req.userId
        });
        res.status(201).json({ msg: "Request Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}