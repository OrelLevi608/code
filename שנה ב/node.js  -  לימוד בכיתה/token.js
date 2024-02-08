const jwt = require('jsonwebtoken'); // חיבור לספרייה

// sign
const token = jwt.sign({userid:5,email:"yogev466@gmail.com"},"orel123aaa",{expiresIn:'1h'}); // הצפנה 
console.log(token);

// verify
const processVerify = jwt.verify(token, "orel123aaa"); // פיענוח
console.log(processVerify);