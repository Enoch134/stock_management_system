import User from "../models/UserModel.js";
import Request from "../models/RequestModel.js";
import argon2 from "argon2";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['uid', 'staffid', 'name','email', 'department', 'staffStatus', 'password','role', 'creator', 'ipAddress', 'location', 'createdTime', 'actionPerformed', 'updator', 'updatorIpAddress', 'updatorLocation', 'updatedTime', 'updatePerformed'],

            include: [{
                model: Request,
                attributes: ['staffId', 'staffName', 'itemName',]
            }]
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['uid', 'staffid', 'name','email', 'department', 'staffStatus', 'password', 'role', 'creator', 'ipAddress', 'location', 'createdTime', 'actionPerformed','updator', 'updatorIpAddress', 'updatorLocation', 'updatedTime', 'updatePerformed'],
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) =>{
    const {staffid, name, email, department, staffStatus, password, confPassword, role, creator, ipAddress, location, createdTime, actionPerformed} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            staffid: staffid,
            name: name,
            email: email,
            department: department,
            staffStatus: staffStatus,
            password: hashPassword,
            role: role,
            creator: creator, 
            ipAddress: ipAddress, 
            location: location, 
            createdTime: createdTime, 
            actionPerformed: actionPerformed, 
            // updator: updator, 
            // updatorIpAddress: updatorIpAddress, 
            // updatorLocation: updatorLocation, 
            // updatedTime: updatedTime
        });
        res.status(201).json({msg: "Register Successful"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    const {staffid, name, email, department, staffStatus, password, confPassword, role, updator, updatorIpAddress, updatorLocation, updatedTime, updatePerformed} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    try {
        await User.update({
            
            staffid: staffid,
            name: name,
            email: email,
            department: department,
            staffStatus: staffStatus,
            password: hashPassword,
            role: role,
            updator: updator, 
            updatorIpAddress: updatorIpAddress, 
            updatorLocation: updatorLocation, 
            updatedTime: updatedTime,
            updatePerformed: updatePerformed,
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
   
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        if(user) return res.status(200).json({alert: "Are Sure Do you want to delete this user"});
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}



// this is for mailtrap testing user and pass not actual user to security
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0f0aa4dd64bbeb",
      pass: "4f57e8f2f97612"
    }
  });



// send email link for reset password
//router.post("/sendpasswordlink"
export const sendEmailLink = async (req, res) => {
    // console.log(req.body)

    
    const  user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });

    if (!user) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const user = await User.findOne({
            where: {
                email: req.email
            }
        });

        // token generate for reset password
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "3m"
        });

        const setusertoken = await User.findByIdAndUpdate({ id: user.id }, { verifytoken: token }, { new: true });

        console.log('userToken', setusertoken);


        if (setusertoken) {
            const mailOptions = {
                from: "adib@gmail.com",
                to: email,
                subject: "Sending Email For password Reset",
                text: `This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${user.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })

        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }
};


// verify user for forgot password time
// route.get('/forgotpassword/:id/:token')
export const forgotPassword = async (req, res) => {
    const { id, token } = req.params;

    try {

        const validUser = await User.findOne({ _id: id, verifytoken: token });

        const verifytoken = jwt.verify(token, process.env.JWT_SECRET);

        console.log(verifytoken);

        if (validUser && verifytoken._id) {
            res.status(201).json({ status: 201, validUser })
        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}


// change password
// route.post('/:id/:token')

export const changePassword = async (req, res) => {
    const { id, token } = req.params;

    const { password } = req.body;

    try {

        const validUser = await User.findOne({ _id: id, verifytoken: token });

        // const verifytoken = jwt.verify(token, process.env.JWT_SECRET);

        if (validUser) {

            const newpassword = await bcrypt.hash(password, 12);

            const setNewPass = await User.findByIdAndUpdate({ _id: id }, { password: newpassword });

            setNewPass.save();

            res.status(201).json({ status: 201, setNewPass })

        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }


    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}