import User from "../models/UserModel.js";
import multer from "multer";
import path from "path"
import StockIn from "../models/StockInModel.js"


export const getStockIn = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await StockIn.findAll({
                attributes: ['stockCode', 'stockImage', 'stockName', 'category', 'stockBrand', 'stockColor', 'purchaseDate', 'purchaseFrom', 'cost', 'quantity', 'status'],

                where: {
                    // directorApproved: "Reject",
                    // managerApproved: 'Approved',
                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await StockIn.findAll({
                attributes: ['stockCode', 'stockImage', 'stockName', 'category', 'stockBrand', 'stockColor', 'purchaseDate', 'purchaseFrom', 'cost', 'quantity', 'status'],
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


export const getStockInId = async (req, res) => {
    try {
        const stockIn = await stockIn.findOne({
            where: {
                uid: req.params.id
            }
        });

        if (!stockIn) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "user") {
            response = await StockIn.findOne({
                attributes: ['stockCode', 'stockImage', 'stockName', 'category', 'stockBrand', 'stockColor', 'purchaseDate', 'purchaseFrom', 'cost', 'quantity', 'status'],
                where: {
                    id: stockIn.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await StockIn.findOne({
                attributes: ['stockCode', 'stockImage', 'stockName', 'category', 'stockBrand', 'stockColor', 'purchaseDate', 'purchaseFrom', 'cost', 'quantity', 'status'],
                where: {
                    [Op.and]: [{ id: stockIn.id }, { userId: req.userId }]
                },
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




export const createStockIn = async (req, res) => {
    const { stockCode,  stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status } = req.body;
    try {
        await StockIn.create({

            stockCode: stockCode,
            stockImage: stockImage,
            stockName: stockName,
            category: category,
            stockBrand: stockBrand,
            stockColor: stockColor,
            purchaseDate: purchaseDate,
            purchaseFrom: purchaseFrom,
            cost: cost,
            quantity: quantity,
            status: status,
            
            file : req.files.file,
            fileSize : file.data.length,
            ext : path.extname(file.name),
            fileName : file.md5 + ext,
            url : `${req.protocol}://${req.get("host")}/images/${fileName}`,
            allowedType : ['.png','.jpg','.jpeg'],



            userId: req.userId
        });
        res.status(201).json({ msg: "Stock Recorded Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}



export const updateStockIn = async (req, res) => {
    try {
        const stockIn = await StockIn.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!stockIn) return res.status(404).json({ msg: "Data not found" });
        const { stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status } = req.body;
        if (req.role === "manager", "director") {
            await StockIn.update({ stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status }, {
                where: {
                    id: stockIn.id
                }
            });
        }
        else {
            if (req.userId !== stockIn.userId) return res.status(403).json({ msg: "Access forbidden" });
            await StockIn.update({ stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status }, {
                where: {
                    [Op.and]: [{ id: stockIn.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Stock updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteStockIn = async (req, res) => {
    try {
        const stockIn = await StockIn.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!stockIn) return res.status(404).json({ msg: "Data not found" });
        const { stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status } = req.body;
        if (req.role === "admin") {
            await StockIn.destroy({ stockCode, stockImage, stockName, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, quantity, status }, {
                where: {

                    id: stockIn.id
                }
            });

        } else {
            if (req.userId !== stockIn.userId) return res.status(403).json({ msg: "Access forbidden" });
            await StockIn.destroy({
                where: {
                    [Op.and]: [{ id: stockIn.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: " deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}



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
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('stockImage')









// export const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// export const upload = multer({
//     storage: storage,
//     limits: { fileSize: '10000000' },
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
