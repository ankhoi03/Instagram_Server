var express = require('express');
var router = express.Router();
const statusController = require('../../Controller_Dat/Status/Controller');
const categoryController = require('../../Controller_Dat/Category/CategoryController');
const UploadFile = require('../../midle/UploadFile');
const CONFIG = require('../../config/config');

router.get('/Product/list', async (req, res, next) => {
    const statuss = await statusController.getAllAccount();
    res.render('Product/list', { statuss });
}
);
router.get('/Product/new', async (req, res, next) => {
    const statuss = await statusController.getAllStatuss();
    res.render('Product/new', { statuss });
}
);
router.get('/Product/history', async (req, res, next) => {
    const statuss = await statusController.getAllStatuss();
    res.render('Product/history', { statuss });
}
);

router.get('/:id/delete', async (req, res, next) => {
    console.log("Test delete Status congratulations >>>>>>>>")
    try {
        const { id } = req.params;
        console.log(id)
        await statusController.deleteStatus(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false });
    }
}
);
router.get('/:id/delete', async (req, res, next) => {
    console.log("Test delete Account congratulations >>>>>>>>")
    try {
        const { id } = req.params;
        console.log(id)
        await statusController.deleteAccount(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false });
    }
}
);

// router.get('/Product/new', async (req, res, next) => {
//     const categories = await categoryController.getAllCategories();
//     res.render('Product/new', { categories });
// }
// );






module.exports = router;