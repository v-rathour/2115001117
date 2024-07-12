const express = require('express');

const route = express.Router();

route.get("/test/companies/:companyname/categories/categoryname/products", async (req, res) => {
    try {
        const { companyname } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        fetch(`http://20.244.56.144/test/companies/${companyname}/categories/categoryname/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`).then((res) => {
            console.log(res);
             res.send(data);
        })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message : err.message});
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = route;