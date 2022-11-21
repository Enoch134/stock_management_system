import User from "../models/UserModel.js";
// import multer from "multer";
import path from "path"
import fs from "fs";
import Stock from "../models/StockModel.js"

// "react-redux": "^8.0.4",

// Get All Stock Start Here
export const getStock = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],

                where: {
                    status: "Not in Use",
                    // managerApproved: 'Approved',
                    userId: req.userId,



                    userId: req.userId



                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
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
// Get All stock end here


// Get All Stock Start Here
export const getAllStock = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    // status: "Not in Use",
                    // managerApproved: 'Approved',
                    userId: req.userId,



                    userId: req.userId



                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
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
// Get All stock end here




// Get All Stock  in use Start Here
export const getStockInUse = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "director", "manager" && req.role !== "user") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    status: "In Use",
                    // managerApproved: 'Approved',
                    userId: req.userId,



                    userId: req.userId



                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
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
// Get All stock  in use end here

// Get All Stock  not in use Start Here
export const getStockNotInUse = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    status: "Not in Use",
                    // managerApproved: 'Approved',
                    userId: req.userId,



                    userId: req.userId



                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
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
// Get All stock not in use end here

// Get stock by Id start here
export const getStockId = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                stockUId: req.params.id
            }
        });

        if (!stock) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "director", "manager", "admin") {
            response = await Stock.findOne({
                attributes: [
                    'id',
                    'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    id: stock.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Stock.findOne({
                attributes: [
                    'id', 'stockUId', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',
                    'department', 'giver', 'dateGiven',
                    'name', 'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: "No Stock Found" });
    }
}
// Get stock by ID end here

// Save/create stock start here
export const saveStock = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const stockUId = req.body.stockUId;
    const stockCode = req.body.stockCode;
    const stockName = req.body.stockName;
    const description = req.body.description;
    const category = req.body.category;
    const stockBrand = req.body.stockBrand;
    const stockColor = req.body.stockColor;
    const purchaseDate = req.body.purchaseDate;
    const purchaseFrom = req.body.purchaseFrom;
    const cost = req.body.cost;
    const assignedTo = req.body.assignedTo;
    const staffId = req.body.staffId;
    const department = req.body.department;
    const giver = req.body.giver;
    const dateGiven = req.body.dateGiven;
    const status = req.body.status;
    const recoderAction = req.body.recoderAction;
    const recoderLocation = req.body.recoderLocation
    const recoderIp = req.body.recoderIp;
    const stockRecoder = req.body.stockRecoder;
    // const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];


    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 20000000) return res.status(422).json({ msg: "Image must be less than 20 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Stock.create({
                stockUId: stockUId,
                stockCode: stockCode,
                stockName: stockName,
                description: description,
                category: category,
                stockBrand: stockBrand,
                stockColor: stockColor,
                purchaseDate: purchaseDate,
                purchaseFrom: purchaseFrom,
                cost: cost,
                staffId: staffId,
                department: department,
                assignedTo: assignedTo,
                giver: giver,
                dateGiven: dateGiven,
                recoderAction: recoderAction,
                recoderLocation: recoderLocation,
                recoderIp: recoderIp,
                stockRecoder: stockRecoder,
                // name: name,
                status: status,
                image: fileName,
                url: url,

                userId: req.userId

            }); res.status(200).json({ staffId });
            res.status(201).json({ msg: "Stock Created Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })

}
//save create stock end here




export const updateStock = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                stockUId: req.params.id
            }
        });
        if (!stock) return res.status(404).json({ msg: "Data not found" });
        const { assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, } = req.body;
        if (req.role === "admin", "manager", "director") {
            await Stock.update({ assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, }, {
                where: {
                    id: stock.id
                }
            });
        }
        else {
            if (req.userId !== stock.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Stock.update({ assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, }, {
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}



















// delete stock start here
export const deleteStock = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                stockUId: req.params.id
            }
        });
        if (!stock) return res.status(404).json({ msg: "Data not found" });



        const {
            stockCode, stockName,
            description, category, stockBrand, stockColor,
            purchaseDate, purchaseFrom, cost,
            assignedTo, staffId,

            department, giver, dateGiven,
            name, status, image,
        } = req.body;
        if (req.role === "admin", "manager", "director" && req.role !== "user") {
            await stock.destroy({
                stockCode, stockName,
                description, category, stockBrand, stockColor,
                purchaseDate, purchaseFrom, cost,
                assignedTo, staffId,

                department, giver, dateGiven,
                name, status, image,
            }, {
                where: {

                    id: stock.id
                }
            });

        } else {
            if (req.userId !== stock.stockUID) return res.status(403).json({ msg: "Access forbidden" });
            await Stock.destroy({
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                }
            });
        }



        res.status(200).json({ msg: " deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Fail to delete" });
    }
}
// delete stock end here


























































































// export const Stock = async (req, res) => {
//     const { stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status } = req.body;
//     try {
//         await StockIn.create({

//             stockCode: stockCode,
//             stockImage: stockImage,
//             // stockImage: req.file.path,
//             stockName: stockName,
//             category: category,
//             stockBrand: stockBrand,
//             stockColor: stockColor,
//             purchaseDate: purchaseDate,
//             purchaseFrom: purchaseFrom,
//             cost: cost,
//             quantity: quantity,
//             status: status,

//             userId: req.userId
//         });
//         res.status(201).json({ msg: "Stock Recorded Successfully" });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }



// export const createStockIn = async (req, res) => {

//     let info = {
//         // image: req.file.path,
//         // title: req.body.title,
//         // price: req.body.price,
//         stockCode: req.body.stockCode,
//         stockImage: req.body.stockImage,
//         stockName: req.body.stockName,
//         category: req.body.category,
//         stockColor: req.body.stockColor,
//         stockBrand: req.body.stockBrand,
//         purchaseDate: req.body.purchaseDate,
//         purchaseFrom: req.body.purchaseFrom,
//         cost: req.body.cost,
//         quantity: req.body.quantity,
//         status: req.body.status,
//         userId: req.userId
//     }
//     console.log(info);
//     const stockIn = await StockIn.create(info)
//     res.status(200).send(stockIn)

//     console.log(stockIn)

// }



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// export const upload = multer({
//     storage: storage,
//     limits: { fileSize: '8000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if (mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('stockImage')
