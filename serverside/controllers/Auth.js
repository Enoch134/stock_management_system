import User from "../models/UserModel.js";
import argon2 from "argon2";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';





export const Login = async (req, res) => {

    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });


    if (!user) return res.status(404).json({ msg: "User not found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.uid;
    const uid = user.uid;
    const staffid = user.staffid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    const department = user.department;
    const staffStatus = user.staffStatus;
    res.status(200).json({ uid, staffid, name, email, department, staffStatus, role });
}

export const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['uid', 'staffid', 'name', 'email', 'department', 'staffStatus', 'role'],
        where: {
            uid: req.session.userId
        }
    });

    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}






// this is for mailtrap testing user and pass not actual user to security
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c35a5160c3141ff1",
        pass: "4b7b641310b15ac2"
    }
});



// send email link for reset password
//router.post("/sendpasswordlink"
export const sendEmailLink = async (req, res) => {
    console.log(req.body)

    const { email } = req.body;


    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        // const user = await User.findOne(
        // { email: email }
        
        // );

        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        
        // token generate for reset password
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "3m"
        });

        const setUserToken = await User.findByIdAndUpdate({ id: user.id }, { verifytoken: token }, { new: true });

        console.log('userToken', setUserToken);


        if (setUserToken) {
            const mailOptions = {
                from: "info@turaymusa.com",
                to: email,
                subject: "Sending Email For password Reset",
                text: `This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${userfind._id}/${setUserToken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Successfully" })
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