// שאלה 1
// הגדירו מערך של אובייקטים עבור מוצרים, הכולל פרטיים של עשרה מוצרים 
// לפחות.  לכל מוצר יכללו השדות הבאים: קוד מוצר, שם מוצר, מחיר, תיאור 
// מוצר, קוד קטגוריית מוצר, שם תמונת מוצר, וכמות במלאי. 


let arrProducds = [
    {pid:1, pname:"Hat raccoon", price:30, description:"Visor hat with raccoon patch" ,category:1, picture:`Visor hat with raccoon patch.jpg` ,stockQTY:10 ,amount:1} , 
    {pid:2, pname:"Hat zebra", price:100, description:"Visor hat with zebra patch", category:1, picture:`Visor hat with zebra patch.jpg` ,stockQTY:20 ,amount:1} ,
    {pid:3, pname:"Hat eagle", price:50, description:"Visor hat with eagle patch", category:1, picture:`Visor hat with eagle patch.jpg` ,stockQTY:30 ,amount:1} ,

    {pid:4, pname:"Hat horse", price:40, description:"Visor hat with horse patch", category:2, picture:`Visor hat with horse patch.jpg` ,stockQTY:40 ,amount:1} ,
    {pid:5, pname:"Hat rooster", price:30, description:"Visor hat with a rooster patch", category:2, picture:`visor hat with a rooster patch.jpg` ,stockQTY:50 ,amount:1} , 
    {pid:6, pname:"Hat cat", price:200, description:"Visor hat with cat patch", category:2, picture:`Visor hat with cat patch.jpg` ,stockQTY:60 ,amount:1} ,

    {pid:7, pname:"Hat puma hat", price:60, description:"Beige puma hat" ,category:3, picture:`'Beige puma hat.jpg` ,stockQTY:70 ,amount:1}  ,
    {pid:8, pname:"Hat cap", price:80, description:"Unisex embroidered logo visor cap", category:3, picture:`Unisex embroidered logo visor cap.jpg` ,stockQTY:80 ,amount:1} ,
    {pid:9, pname:"Hat puma hat", price:150, description:"Black puma hat", category:3, picture:`Black puma hat.jpg` ,stockQTY:90 ,amount:1} ,

    {pid:10, pname:"Hat Adidas", price:10, description:"Adidas visor cap", category:4, picture:`Adidas visor cap.jpg` ,stockQTY:100 ,amount:1} ,
    {pid:11, pname:"Hat bulldog", price:30, description:"Visor hat with bulldog patch", category:4, picture:`Visor hat with bulldog patch.jpg` ,stockQTY:110 ,amount:1} ,
    {pid:12, pname:"Hat Bucket hat", price:35, description:"Bucket hat with eye patch", category:4, picture:`Bucket hat with eye patch.jpg` ,stockQTY:120 ,amount:1} ,  

    {pid:13, pname:"Hat Corduroy", price:50, description:"Corduroy visor hat with logo" ,category:5, picture:`Corduroy visor hat with logo.jpg` ,stockQTY:130 ,amount:1} , 
    {pid:14, pname:"Hat GAP", price:20, description:"GAP visor cap", category:5, picture:`GAP visor cap.jpg` ,stockQTY:140 ,amount:1} ,
    {pid:15, pname:"Hat cap", price:15, description:"Unisex striped print visor hat", category:5, picture:`Unisex striped print visor hat.jpg` ,stockQTY:150 ,amount:1} , 
];


// שאלה 2
// הגדירו מערך של אובייקטים עבור קטגוריות מוצרים בגודל מינימלי של 5. כל 
// קטגוריה תכל ול את השדות הבאים: קוד קטגוריה, שם קטגוריה, שם תמונת 
// קטגוריה . 


let categories=[
 {Cat_id:1, cat_Name:`hat11`,cat_Photo:`niceHat_11`},
 {Cat_id:2, cat_Name:`hat22`,cat_photo:`niceHat_22`},
 {Cat_id:3, cat_Name:`hat33`,cat_Photo:`niceHat_33`},
 {Cat_id:4, cat_Name:`hat44`,cat_Photo:`niceHat_44`},
 {Cat_id:5, cat_Name:`hat55`,cat_Photo:`niceHat_55`},
]


//  שאלה 3
// צרו מערך עבור סל קניות שיכלול כמה פריטים, לכל פריט בסל הקניות 
// יישמרו השדות הבאים: קוד מוצר, כמות 


// אפשרות 1
// let arrayCart=arrProducds.map(function(element){  // אם השדות - שם וכמות map יצרתי מערך משוכפל על ידי פונקציה 
//     return {pid:element.pid,amount:element.amount};
// })
// console.log(arrayCart);


// אפשרות 2
let arrayCart=[
    {pid:1,amount:1} , 
    {pid:2,amount:1} ,
    {pid:3,amount:1} ,
    {pid:4,amount:1} ,
    {pid:5,amount:1} , 
]



// שאלה 4
//הפונקציה תקבל addToCart כתבו פונקציה להוספה לסל הקניות בשם
// את קוד המוצר ואת הכמות להוספה. במידה והמוצר לא קיים בסל, תוסיף
// פריט חדש לסל, במידה והמוצר קיים, תעדכן את הכמות בסל של פריט
// המוצר. 


     // הוספה לסל הקניות + עדכון כמות + ואם אין מוצר מסוים בסל אז זה יוסיף ויעדכן
function addToCart(product_Id, amount) {
    let foundProduct = arrayCart.findIndex(function (element) {
        if (element.pid == product_Id) // true במידה והמוצר קיים בסל, תרשום 
            return true;
    });
    if (foundProduct != -1) // משמעותו של 1- הוא מוצר לא קיים
        arrayCart[foundProduct].amount = amount; // במידה והמוצר קיים, תוסיף את הכמות לסל
    else if (product_Id != arrayCart.pid) // אם המוצר לא קיים כנס
        arrayCart.push({ pid: product_Id, amount: amount }); // תוסיף פריט חדש
    else
        arrayCart[foundProduct].amount += amount; // במידה והמוצר קיים, תעדכן את הכמות בסל של המוצר
};



// שאלה 5
//הפונקציה removeFromCart כתבו פונקציה להסרה מסל הקניות בשם
// תקבל את קוד המוצר, ותסיר את הפריט מסל הקניות במידה והוא קיים. 


function removeFromCart(product_Id) {
    let rmoveProduct = arrayCart.findIndex(function (element) {
        if (element.pid == product_Id)
            return true;
    });
    if (rmoveProduct != 0) //אז כנס (so enter) -שונה מ 1 rmoveProduct אם הערך של
        arrayCart.splice(rmoveProduct, 1) // תמחק כמות 1 , rmoveProduct המיקום שבו נמצאה הערך של
    else
        console.log("The product is not found.");
};



// שאלה 6
//הפונקציה תחזיר ()drawCart כתבו פונקציה להצגת סל הקניות בשם
//מחרוזת ובה יכללו שמות המוצרים והמחיר שלהם


function drawCart() {
    let dataFromCart = arrProducds.map(function (element) { // אבל אני אבחר איזה שדות הוא יציג, זה יציג את כל המערך , אורך המערך לא ישתנה forEach יעבור על כל המערך כמו לולאת 
        return { pname: element.pname, price: element.price }; //ותביא את הערך שלו pname תיקח את האובייקט ,pname פה אני אומר לא תיגש לשדה 
    });
    console.log(dataFromCart);
};



// שאלה 7
//שתקבל קוד קטגוריה ותחזיר מערך  filterByCat כתבו פונקציה בשם
// הכולל רק את המוצרים השייכים לקטגוריה שקיבלה . 


function filterByCat(codePid) {
    let filterCat = arrProducds.filter(function (element1) {
        if (element1.category == codePid)
            return true;
    });
    console.log(filterCat);
}



// שאלה 8
//שתקבל כמות במלאי מינימלית filterByMinStock כתבו פונקציה בשם 
// ותחזיר מערך הכולל רק את המוצרים שהכמות שלהם גדולה מהכמות
// שקיבלה . 


function filterByMinStock(stoQTY) {
    let minStock = arrProducds.filter(function (element300) { //יוצר מסנן את האובייקים filter ה
        if (element300.stockQTY >= stoQTY) // רק את המוצרים שהכמות שלהם גדולה מהכמות שקיבלה
            return true;
    });
    console.log(minStock);
};


// שאלה 9
// כתבו פונקציה להוזלה / ייקור מחירי מוצרים, תוך שימוש בפונקציות 
// מערכים . 


// הוזלה
function getDiscontPrice(discount) {
    if (discount < 0 || discount > 1) {
        console.error("Discount should be a percentage between 0 and 1");
        return null;
    }
    let price_Discount = arrProducds.map(function (element10) {
        return { pname: element10.pname, price: element10.price - ((discount / 100) * element10.price) };
    });
    price_Discount.forEach((element10) => {
        console.log(`The discount price after calculation is: ${element10}`);
    });
};

// ייקור
function getIncreasePrice(discount) {
    if (discount < 0 || discount > 1) {
        console.error("Discount should be a percentage between 0 and 1, for example: 0.5 or 0.7");
        return null;
    }
    let price_Increase = arrProducds.map(function (element10) {
        return { pname: element10.pname, price: element10.price + ((discount / 100) * element10.price) };
    });
    price_Increase.forEach((element10) => {
        console.log(`The discount price after calculation is: ${element10}`);
    });
};




// שאלה 10
// שמחזירה את סך המחיר הכולל של המערך  getTotalCart כתבו פונקציה בשם


function getTotalProductsPrice() {
    let total = 0;  // משתנה שבוא יכנס סכום כל המוצרים 
    for (let i = 0; i < arr_Products.length; i++) { //יגיע לגודל אורך המערך I עד ש 
        total += arr_Products[i].price;  //total הכנסת כל מחיר של מערך המוצרים לתוך 
    }
    return console.log(`The price total is ${total}`);  //total מחזיר את הערך של 
}









