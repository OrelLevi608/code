require('dotenv').config();

// חיבור של ספריות
const jwt = require('jsonwebtoken');
const session=require('express-session'); 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

// ייבוא של קבצים
const productRouter = require('./api/v1/routes/product');
const categoryRouter = require('./api/v1/routes/category');
const userRouter = require('./api/v1/routes/user');
const auth = require('./api/v1/middlewares/auth');

// בענן MongoDB תהליך התחברות ל
const ConnStr = process.env.MONGO_CONN;  // שליפת מחרוזת התחברות מתוך הגדרות המערכת
mongoose.connect(ConnStr).then((status)=>{ // זה פרמטר שנתנו status
    if (status)  // true
        console.log('Connected to MongoDB');
    else
        console.log('Not connected');
});

// use
app.use(morgan('dev'));
app.use(express.json()); // json בקידוד body הוספת שכבה שמטפלת בבקשות שכוללות
app.use(express.urlencoded({ extended: true }));   // urlencoded הוספת שכבה שמטפלות בבקשות שנשלחו בפורמט 
// app.use(auth);  // מכיל על כל הקבצים 
app.use('/product',auth, productRouter);  // product מבצע בדיקת התחברות רק על הקובץ  
app.use('/category', categoryRouter);
app.use('/user', userRouter);

// הודעת שגיאה במידה ולא נמצאה הכתובת
app.all("*", (req,res)=>{
    return res.status(404).json({msg:"Not found"});
});
module.exports = app;