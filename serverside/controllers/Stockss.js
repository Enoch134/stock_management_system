import Stock from "../models/StockModel.js";
import User from "../models/UserModel.js";
import path from "path";
import fs from "fs";

export const getStock = async (req, res) => {
    try {
        const response = await Stock.findAll();
        include: [{
            model: User,
            attributes: ['name', 'email']
        }]
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getStockById = async (req, res) => {
    try {
        const response = await Stock.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User,
                attributes: ['name', 'email']
            }]
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveStock = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const stockCode = req.body.stockCode;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];
    const name = req.body.title;
    const category = req.body.stockId;
    const stockBrand = req.body.stockId;
    const stockColor = req.body.stockId;
    const purchaseDate = req.body.stockId;
    const purchaseFrom = req.body.stockId;
    const cost = req.body.stockId;
    const quantity = req.body.stockId;
    const status = req.body.stockId;



    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 20000000) return res.status(422).json({ msg: "Image must be less than 20 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Stock.create({

                stockCode: stockCode,
                name: name,
                image: fileName,
                url: url,
                category: category,
                stockBrand: stockBrand,
                stockColor: stockColor,
                purchaseDate: purchaseDate,
                purchaseFrom: purchaseFrom,
                cost: cost,
                quantity: quantity,
                status: status,

                userId: req.userId

            });
            res.status(201).json({ msg: "Stock Created Successfuly" });
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateStock = async (req, res) => {
    const stock = await Stock.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!stock) return res.status(404).json({ msg: "No Data Found" });

    let fileName = "";
    if (req.files === null) {
        fileName = stock.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${stock.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Stock.update({ name: name, image: fileName, url: url }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Stock Updated Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteStock = async (req, res) => {
    const stock = await Stock.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!stock) return res.status(404).json({ msg: "No Data Found" });

    try {
        const filepath = `./public/images/${stock.image}`;
        fs.unlinkSync(filepath);
        await Stock.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Stock Deleted Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}