const router = require('express').Router();

const {
    getAllCategories,
    getCategoryById,
    addCategory,
    updateCategoryById,
    deleteCategoryById } = require('../controller/category');

router.get("/", getAllCategories); // שליפה– GET
router.get("/:id" , getCategoryById); // שליפה– GET
router.post("/", addCategory); // בקשה להוספה - POST
router.patch("/:id", updateCategoryById); // בקשה לעדכון – PUT , PATCH 
router.delete("/:id", deleteCategoryById); // בקשה למחיקה  - DELETE

module.exports = router;