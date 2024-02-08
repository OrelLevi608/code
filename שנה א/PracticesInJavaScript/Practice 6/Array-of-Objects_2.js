let products = [
    { pid: 1, pname: 'bread', price: 10, shortDesc: 'White bread', longDesc: 'White bread is recommended.', picName: 'bread.jpg' },
    { pid: 2, pname: 'milk', price: 2000, shortDesc: 'Tnuva milk ', longDesc: 'Tnuva milk in a carton', picName: 'milk.jpg' },
    { pid: 3, pname: 'eggs', price: 15, shortDesc: 'eggs', longDesc: 'free range eggs', picName: 'eggs.jpg' },
    { pid: 4, pname: 'phone', price: 1000, shortDesc: 'Xiaomi phone ', longDesc: 'Xiaomi 12', picName: 'xiaomi.jpg' }
];

let clients = [
    { cid: 20, cname: 'Israel Levi', address: 'Herzl 13', city: 'Ashdod', email: 'israel@gmail.com', pass: '123', phone: '050-1234567' },
    { cid: 42, cname: 'Moshe Cohen', address: 'Rambam 20', city: 'Herzliya', email: 'moshe@gmail.com', pass: '456', phone: '052-6543217' }
];

let orders = [
    { oid: 29, cid: 42, oDate: '16/11/2023', status: true, orderTotal: 0 },  // זה אומר נמכר true החלטנו 
    { oid: 36, cid: 20, oDate: '16/11/2023', status: false, orderTotal: 0 }  // זה אומר לא נמכר false החלטנו 
];

let orderDetails = [
    { odid: 1, oid: 29, pid: 1, price: 10, pname: 'White bread', amount: 3 },
    { odid: 2, oid: 29, pid: 2, price: 20, pname: 'milk', amount: 5 },
    { odid: 3, oid: 36, pid: 2, price: 20, pname: 'milk', amount: 4 }
];

let cart = [
    { pid: 2, amount: 3 },
    { pid: 4, amount: 1 }
];




                                                 
// Question 1
// כתבו פונקציה המדפיסה את מספר ההזמנה היקרה ביותר, הפונקציה 
// תדפיס את מספר ההזמנה ואת תאריך ההזמנה. 


// function findMostExpensiveOrder() {
//     let maxOrderTotal = 0;  // אתחול של משתנה לערך אפס
//     let mostExpensiveOrder = null; // אתחול של משתנה לערך ריק, כדי להכניס אליו מערך וגם להדפיס את התוצאה המתאימה (ההזמנה היקרה ביותר) וככה זה מאפשר לנו לקרוא למערך מחוץ ללולאה שלו

//     orders.forEach(elementOrders => {  // orders לולאה שרצה על מערך של הזמנות בשם
//         let orderTotal = 0; // orders משתנה שאליו נבצע את פעולת הסכמה בכל כניסה על הלולאה של

//         orderDetails.forEach(elementOrderDetails => {  // elementOrderDetail לולאה שרצה על מערך של פרטי הזמנות בשם
//             if (elementOrders.oid === elementOrderDetails.oid) { // תנאי אם מספרי הזמנה שווים כנס 
//                 orderTotal += elementOrderDetails.price * elementOrderDetails.amount;  //אך ורק של הזמנה שכן עמדה בתנאי orderTotal פעולת הסכמה לתוך המשתנה 
//             }
//         });  //(פרטי הזמנות) orderDetails שרצה על המערך  forEach סגירה של פונקציה

//         if (orderTotal > maxOrderTotal) {  //שהוא מאותחל לאפס maxOrderTotal תנאי לבדיקה אם המשתנה שאליו ביצענו את פעולת הסכמה, גדול מהמשתנה 
//             maxOrderTotal = orderTotal;  // ביצוע פעולת השמה
//             mostExpensiveOrder = elementOrders; // וזה יוצר סוג של מערך וככה ניתן ליצור סוג של סינון לתוך משתנה mostExpensiveOrder פעולת השמה של הזמנות שכן עמדו בתנאי הקודם, ורק אותם אובייקטים ששיכים לאותו מספר הזמנה יושמו לתוך המשתנה  
//         }
//     });  //(הזמנות) orders שרצה על המערך  forEach סגירה של פונקציה


//     if (mostExpensiveOrder !== null) {  // תנאי להדפסה
//         console.log(`Most Expensive Order: ${mostExpensiveOrder.oid}, Order Date ${mostExpensiveOrder.oDate}`); // פה הצלחתי לקרוא למערך
//     } 
//     else {
//         console.log("No orders found");
//     }
// }

// // קריאה לפונקציה כדי להדפיס את התוצאה
// findMostExpensiveOrder();






// Question 2
// כתבו פונקציה המקבלת קוד לקוח ומדפיסה את כל ההזמנות של הלקוח. 
// .הפונקציה תדפיס את שם הלקוח ואתר המוצרים שהיו בכל ההזמנות שלו


// function getCodeCustomer(enterCode) {  // קבלת פרמטר מהמשתמש
//     orders.forEach(elementOrders => {  // orders לולאה העוברת על מערך בשם
//         orderDetails.forEach(elementOrderDetails => {  // orderDetails לולאה העוברת על מערך בשם
//             clients.forEach(elementClients => {  // clients לולאה העוברת על מערך בשם
//                 if (enterCode === elementClients.cid) {  // clients תנאי ראשון: אם הפרמטר שהוכנס שווה לקוד לקוח במערך
//                     if (elementClients.cid === elementOrders.cid) {  //orders שווה לקוד לקוח במערך clients תנאי שני: אם קוד לקוח במערך
//                         if (elementOrders.oid === elementOrderDetails.oid) { //orderDetails שווה למספר הזמנה במערך orders תנאי שלישי: אם מספר הזמנה במערך  
//                             console.log(`Number order: ${elementOrders.oid}, The name of customer is: ${elementClients.cname}, the products on his order: ${elementOrderDetails.pname}`);
//                         }
//                     }
//                 }
//             })
//         }) 
//     })
// };
// //  זימון/קריאה לפונקציה כדי להדפיס
// getCodeCustomer(42);





// Question 3
//(orderTotal השדה) כתבו פונקציה המעדכנת את סך ההזמנה לכל הזמנה


// function whichUpdatesTheOrderTotal() {
//     let new_ArrayTotal = null;  // אתחול של משתנה לערך ריק, כדי להכניס אליו מערך ושנוכל להדפיס את התוצאה המתאימה
//     orders.forEach(elementOrders => {  // orders לולאה העוברת על מערך של
//         orderDetails.forEach(elementOrderDetails => {  // orderDetails לולאה העוברת על מערך של
//             if (elementOrders.oid === elementOrderDetails.oid) {  // התנאי הזה מאפשר לנו לבצע חישוב בדיוק באותה  הזמנה שנרצה לבצע חישוב , ומונע ערבוב של חישובים בין הזמנות
//                 elementOrders.orderTotal += elementOrderDetails.price * elementOrderDetails.amount;  // פעולת חישוב של מחיר כפול כמות, ואז התוצאה נכנסת ישירות למערך שבתוכו יש תאים של חישוב סה"כ של הזמנה
//             }
//             new_ArrayTotal = elementOrders;  // זה יהיה כמו מערך new_ArrayTotal פעולת השמה של מערך למשתנה הריק , זאת אומר שעכשיו אותם הזמנות שהם עמדו בתנאי, כל האובייקטים של אותו מיקום יכנסו ל 
//         })
//         if (new_ArrayTotal !== null) {  // תנאי להדפסה
//             console.log(`Number order: ${new_ArrayTotal.oid}, Order total for each order: ${new_ArrayTotal.orderTotal}`);
//         }
//     });
// };
// //  זימון/קריאה לפונקציה כדי להדפיס
// whichUpdatesTheOrderTotal();





// Question 4
// כתבו פונקציה המדפיסה את כל המוצרים שלא הוזמנו כלל. הפונקציה 
// תדפיס את קוד ה מוצר ושם המוצר 


// findIndex דרך אחת שימוש בפונקציה

// function printProductNotOrdered() {
//     products.findIndex(elementProducts => {  // products ערכתי חיפוש בתוך המערך של 
//         let ordered = false // נתנתי הוראה שהמשתנה הזה שקר (אתחול)
//         orderDetails.findIndex(elementOrderDetails => {  // orderDetails ערכתי חיפוש בתוך המערך של 
//             if (elementProducts.pid === elementOrderDetails.pid) { // פה אני בודק התאמה 
//                 ordered = true;  //ordered = true אם יש התאמה ההמערכת מגדירה כהוזמן, כביכול כל המוצרים שהוזמנו הם נמצאים ב
//             }
//         });
//         if (ordered !== true) {  //אז זה אומר שהמוצר לא הוזמן true פה אם זה שונה מ 
//             console.log(`Product not ordered: ${elementProducts.pid}, Name: ${elementProducts.pname}`);   // ופה אני אומר לו מה להדפיס וזה מדפיס רק את מה שלא הוזמן
//         }
//     });
// };
// printProductNotOrdered();


// forEach דרך שניה שימוש בפונקציה

// function printProductsNotOrder() {
//     products.forEach(elementProducts => {
//         let ordered = false;  // נתנתי הוראה שהמשתנה הזה שקר(אתחול)

//         orderDetails.forEach(orderDetail => {
//             if (elementProducts.pid === orderDetail.pid) {  // פה אני בודק התאמה 
//                 ordered = true;  //ordered אם יש התאמה ההמערכת מגדירה כהוזמן, כביכול כל המוצרים שהוזמנו הם נמצאים ב
//             }
//         });

//         if (ordered !== true) {  //אז זה אומר שהמוצר לא הוזמן true פה אם זה שונה 
//             console.log(`Product not ordered: ${elementProducts.pid}, Name: ${elementProducts.pname}`);  // ופה אני אומר לו מה להדפיס וזה מדפיס רק את מה שלא הוזמן
//         }
//     });
// }
// printProductsNotOrder();





// Question 5
// כתבו פונקציה המדפיסה את כל המוצרים שהוזמנו יותר מפעם אחת 
// (המוצר מופיע ביותר מהזמנה אחת), הפונקציה תדפיס את שם המוצר ואת 
// המחיר שלו 


// function printProductWhichorderDouble() {
//     let newArrayProductsOrderedMoreThanOnce = []; // יצירת מערך ריק כדי להוסיף לתוכו את המוצרים שהוזמנו יותר מפעם אחת

//     products.forEach(ele_products => {  //עולה למיקום 1 וכן העלאה products אורך המערך 3, לאחר מכן orderDetails במקרה הזה אורך המערך 4, שנשאר על מיקום 0 עד שהלולאה הפנימית מסימת את כניסת המערך כגודל המערך במקרה הזה products לולאה שרצה על מערך
//         let count = 0;  // מתאפס ל 0 count המשתנה products משתנה שסופר את כמות הפעמים שהמוצר הוזמן, יותר מפעם אחת ובכל תחילת כניסה ללולאה של
//         orderDetails.forEach(ele_orderDetails => {  // orderDetails לולאה שרצה על מערך
//             if (ele_products.pid === ele_orderDetails.pid) {  // (if בתוך if) יצירת תנאי מקונן
//                 count++;  // עולה count בכל כניסה המשתנה
//                 if (count > 1) {  // יהיה גדול מ 1 ואז הוא יכנס count גדול מ 1 ,למה רשמתי? בגלל שלפי השאלה צריך למצוא את המוצר שמוזמן יותר מפעם 1 , אז ברגע שיהיה מוצר יותר מפעם אחת, אז   count תנאי האם המשתנה 
//                     newArrayProductsOrderedMoreThanOnce.push({  // זה מאפשר לי להוסיף/לדחוף לתוך המערך את המוצרים שהוזמנו יותר מפעם אחת ,push בעזרת פונקציה 
//                         pname: ele_products.pname,  // הוספת אובייקט לתוך המערך
//                         price: ele_products.price  // הוספת אובייקט לתוך המערך
//                     });
//                 }
//             }
//         });
//     });
//     newArrayProductsOrderedMoreThanOnce.forEach(resultDoubleProducts => {
//         console.log(`The name of the product that ordered more then once is: ${resultDoubleProducts.pname}, The price is: ${resultDoubleProducts.price}`);
//     });
// }
// printProductWhichorderDouble();






// Question 6
// כתבו פונקציה המחשבת ומדפיסה את המוצר שהוזמן הכי הרבה פעמים 
// (סך הכמות בכל ההזמנות בהן הוא נכלל), הפונקציה תדפיס את שם המוצר 
// ואת הכמות



// function findProdWithMostAmount() {
//     let totalAmountOfMilk = 0;  // משתנה שאליו נסכום את הכמות של המוצר
//     let array = null;  // אתחול של משתנה לערך ריק, כדי להכניס אליו מערך ושנוכל להדפיס את התוצאה המתאימה
//     products.forEach(eleProd => {  // products שתעבור על מערך forEach לולאת 
//         let count = 0;  // מתאפס ל 0 count המשתנה products משתנה שסופר את כמות הפעמים שהמוצר הוזמן, יותר מפעם אחת ובכל תחילת כניסה ללולאה של
//         orderDetails.forEach(eleOrderDetails => {  // orderDetails שתעבור על מערך forEach לולאת 
//             count++  // עולה count בכל כניסה המשתנה
//             if(count > 1) {  // יהיה גדול מ 1 ואז הוא יכנס count גדול מ 1 ,למה רשמתי? בגלל שלפי השאלה צריך למצוא את המוצר שמוזמן יותר מפעם 1 , אז ברגע שיהיה מוצר יותר מפעם אחת, אז   count תנאי האם המשתנה 
//                 if (eleProd.pid === eleOrderDetails.pid) {  // יצירת תנאי כדי לסנן את המוצר שהוזמן הכי הרבה
//                     array = eleOrderDetails;  // פעולת השמה לתוך משתנה שבסופו של דבר יהיה מערך מערך 
//                     totalAmountOfMilk += array.amount;  // פעולת הסכמה לתוך משתנה, שדרכו יהיה אפשר להדפיס את התוצאה
//                 }
//             } 
//         })
//     });
//     console.log(`The name of product that is time the most times: ${array.pname}, The total quantity in all orders in which it is included: ${totalAmountOfMilk}.`);
// };
// findProdWithMostAmount();




//-------------------------------------------------------------------//

// אופציה למיזוג מערכים
//(orderDetails) מערך פרטי הזמנות (orders) נמצא בתוך מערך הזמנות



// let orders = [
//     { cid: 42, oDate: '16/11/2023', status: true, orderTotal: 0 },  
//     { cid: 20, oDate: '16/11/2023', status: false, orderTotal: 0 ,
//         orderDetails:[
//              { pid: 1, price: 10, pname: 'White bread', amount: 3 },
//              { pid: 2, price: 20, pname: 'milk', amount: 5 },
//              { pid: 2, price: 20, pname: 'milk', amount: 4 } ]
//     }
// ];







