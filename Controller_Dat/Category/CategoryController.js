
const categoryService = require('./CategorySevice');

const getAllCategories = async () => {
    try {
        return await categoryService.getAllCategory();
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllCategories };