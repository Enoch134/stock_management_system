import LoginIpAddress from "../models/LoginIpAddressModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getLoginIpAddress = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await LoginIpAddress.findAll({
                attributes:['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                include:[{
                    model: User,
                    attributes:['name','email', 'staffid']
                }]
            });
        }else{
            response = await LoginIpAddress.findAll({
                attributes:['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email', 'staffid']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getLoginIpAddressById = async(req, res) =>{
    try {
        const loginIpAddress = await LoginIpAddress.findOne({
            where:{
                uid: req.params.id
            }
        });
        if(!loginIpAddress) return res.status(404).json({msg: "Data not Found"});
        let response;
        if(req.role === "admin"){
            response = await LoginIpAddress.findOne({
                attributes:['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                where:{
                    id: loginIpAddress.id
                },
                include:[{
                    model: User,
                    attributes:['name','email', 'staffid']
                }]
            });
        }else{
            response = await LoginIpAddress.findOne({
                attributes:['uid', 'staffid', 'staffName', 'email', 'ipAddress', 'location', 'loginTime'],
                where:{
                    [Op.and]:[{id: loginIpAddress.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email', 'staffid']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createLoginIpAddress = async(req, res) =>{
    const {staffid, staffName, email, location, ipAddress, loginTime} = req.body;
    try {
        await LoginIpAddress.create({
            staffid: staffid,
            staffName: staffName,
            email: email,
            ipAddress: ipAddress,
            location: location,
            loginTime: loginTime,

            userId: req.userId
        });
        res.status(201).json({msg: "Ip Created Successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
