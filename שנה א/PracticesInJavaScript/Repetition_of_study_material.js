// JS משימת תרגול 1 יסודות התכנות

// Question 1

let arrProducds = [
    {pid:1, pname:"Hat raccoon", price:30, description:"Visor hat with raccoon patch" ,category:1, picture:`Visor hat with raccoon patch.jpg` ,stockQTY:10 ,amount:1} , 
    {pid:2, pname:"Hat zebra", price:100, description:"Visor hat with zebra patch", category:1, picture:`Visor hat with zebra patch.jpg` ,stockQTY:20 ,amount:1} ,
    {pid:3, pname:"Hat eagle", price:50, description:"Visor hat with eagle patch", category:1, picture:`Visor hat with eagle patch.jpg` ,stockQTY:30 ,amount:1} ,

    {pid:4, pname:"Hat horse", price:40, description:"Visor hat with horse patch", category:2, picture:`Visor hat with horse patch.jpg` ,stockQTY:40} ,
    {pid:5, pname:"Hat rooster", price:30, description:"Visor hat with a rooster patch", category:2, picture:`visor hat with a rooster patch.jpg` ,stockQTY:50} , 
    {pid:6, pname:"Hat cat", price:200, description:"Visor hat with cat patch", category:2, picture:`Visor hat with cat patch.jpg` ,stockQTY:60} ,

    {pid:7, pname:"Hat puma hat", price:60, description:"Beige puma hat" ,category:3, picture:`'Beige puma hat.jpg` ,stockQTY:70}  ,
    {pid:8, pname:"Hat cap", price:80, description:"Unisex embroidered logo visor cap", category:3, picture:`Unisex embroidered logo visor cap.jpg` ,stockQTY:80} ,
    {pid:9, pname:"Hat puma hat", price:150, description:"Black puma hat", category:3, picture:`Black puma hat.jpg` ,stockQTY:90} ,

    {pid:10, pname:"Hat Adidas", price:10, description:"Adidas visor cap", category:4, picture:`Adidas visor cap.jpg` ,stockQTY:100} ,
    {pid:11, pname:"Hat bulldog", price:30, description:"Visor hat with bulldog patch", category:4, picture:`Visor hat with bulldog patch.jpg` ,stockQTY:110} ,
    {pid:12, pname:"Hat Bucket hat", price:35, description:"Bucket hat with eye patch", category:4, picture:`Bucket hat with eye patch.jpg` ,stockQTY:120} ,  

    {pid:13, pname:"Hat Corduroy", price:50, description:"Corduroy visor hat with logo" ,category:5, picture:`Corduroy visor hat with logo.jpg` ,stockQTY:130} , 
    {pid:14, pname:"Hat GAP", price:20, description:"GAP visor cap", category:5, picture:`GAP visor cap.jpg` ,stockQTY:140} ,
    {pid:15, pname:"Hat cap", price:15, description:"Unisex striped print visor hat", category:5, picture:`Unisex striped print visor hat.jpg` ,stockQTY:150} , 
];

// Question 2

// function getMaxPrice() {
//     let maxPrice = 0;
//     for(let i = 0; i < arrProducds.length; i++) {
//         if(maxPrice < arrProducds[i].price) 
//             maxPrice = arrProducds[i].price; 
//     }  
//     console.log(`The max Price in all arrProducds is: ${maxPrice}`)
// }
// getMaxPrice(); // זימון/קריאה לפונקציה


//Question 3

//  increase price // התייקרות של מחיר

// function increasePrice(Discount) {  // זה מחיר הנחה Discount
//     for(let i = 0; i < arrProducds.length; i++) {
//     let resultAfterDiscount = (((Discount / 100) * arrProducds[i].price) + arrProducds[i].price);                        
//         console.log(`After increase price for product ${arrProducds[i].pname} is: ${resultAfterDiscount}`);
//     }
// };
// increasePrice(31)  // מחיר הנחה שקבעתי הוא 30, אפשר לרשום כל מחיר שהוא

////////////////////////////////////
// console.log(`Profit -------------------------------------------- Profit רווח`)

// price reduction // הוזלת מחיר

// function reductionPrice(Discount) {  // זה מחיר הנחה Discount
//     for(let i = 0; i < arrProducds.length; i++) {
//     let resultAfterDiscount = (arrProducds[i].price - ((Discount / 100) * arrProducds[i].price));                        
//         console.log(`After discount price for product ${arrProducds[i].pname} is: ${resultAfterDiscount}`);
//     }
// };
// reductionPrice(30)  // מחיר הנחה שקבעתי הוא 30, אפשר לרשום כל מחיר שהוא



//Question 4

function increaseProductById(recive_Id) {
    let increaseOneProd = 30;  // אחוז התייקרות
    let printResult = null;  // תנאי להדפסה
    arr_Products.forEach(elementArr_Products => {
        if (recive_Id === elementArr_Products.pid) {
            elementArr_Products.price = (((increaseOneProd / 100) * elementArr_Products.price) + elementArr_Products.price); 
            printResult = elementArr_Products.pid;
        }
    });
    if (printResult !== null) {
        console.log(`After increase price, the new price is: ${printResult}`);
    }
    else {
        console.log(`Product not found.`);
    }
}
increaseProductById(3);



// דף משימה 1 סיימתי
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// משימת תרגול 2 - פונקציות

// Question 1

// function action_Plus(a,b) {
// console.log(`The result is: ${a+b}`);
// };

// function action_Subtraction(a,b) {
// console.log(`The result is: ${a-b}`);
// };

// function action_Multiplication(a,b) {
// console.log(`The result is: ${a*b}`);
// };

// function action_Division(a,b) {
// console.log(`The result is: ${a/b}`);
// };

// action_Plus(5,5);
// action_Subtraction(10,5);
// action_Multiplication(10,3);
// action_Division(30,10);



// Question 2

// let num1 = function(){
//     console.log(5+5);
// };
// let num2 = function(){
//     50-20;
// };
// let num3 = function(){
//     100*2;
// };
// let num4 = function(){
//     10/100;
// };
// console.log(`action_Plus: ${num1},  action_Subtraction${num2},  action_Multiplication${num3},  action_Division${num4}`);



// Question 3

let number1 = (a,b)=>{
    return a+b;
};
let number2 = (a,b)=>{
    return a-b;
};
let number3 = (a,b)=>{
    return a*b;
};
let number4 = (a,b)=>{
    return a/b;
};


// Question 4

// console.log(number1(150,50));
// console.log(number2(35,5));
// console.log(number3(5,5));
// console.log(number4(150,50));


// Question 5

// הסבר שימוש

//     // פונקציה שמקבלת שני ערכים ופונקציה ומחזירה את הערך שהתקבל
// function calc(a,b,Callback){
//     // הפעלת הפונקציה שהתקבלה ושליחת אליה את שני הערכים
//     return Callback(a,b)
// };

// function testReturn(a_test, b_test){
//     // כאן יכולה להיות כל סוג של חישוב שאנחנו רוצים 
//     return a_test + b_test;
// };

// // השימוש בפונקציה  testReturn עם הפונקציה  calc
// let res = calc(5, 10, testReturn);
// console.log(res); // הדפסת התוצאה






// תשובה לשאלה

    // פונקציה שמקבלת שני ערכים ופונקציה ומחזירה את הערך שהתקבל
    function calc(a,b,Callback){
        // הפעלת הפונקציה שהתקבלה ושליחת אליה את שני הערכים
        return Callback(a,b)
    };

    // פונקציות נלקחו משאלה 3

    let res1 = calc(5, 10, number1);
    console.log(res1); // הדפסת התוצאה

    let res2 = calc(5, 10, number2);
    console.log(res2); // הדפסת התוצאה
    
    let res3 = calc(5, 10, number3);
    console.log(res3); // הדפסת התוצאה

    let res4 = calc(5, 10, number4);
    console.log(res4); // הדפסת התוצאה



// דף משימה 2 סיימתי
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Question 1

// let array = [5, 12, 8, 130, 44]; // אורך המערך 5
// console.log(array);

// //מוצירה את הערך שבתוך המערך מהסוף pop אז אני יוצר מצב שהלולאה עוברת על כל המערך מהסוף להתחלה בגלל
// // שהפונקציה i-- שווה 5 ואז שאני רושם ש i שווה לאורך המערך אז זה אומר ש i ברגע שאני אומר ש i
// for(let i = array.length; i >= array.length; i--) {
// let outNumber = array.pop(); // משמשת להוצאת האיבר האחרון ממערך pop
// }
// console.log(array);


// Question 2

// let array = [5, 12, 8, 130, 44, 100]; // אורך המערך 5
// console.log(array);

// for(let i = array.length; i >= array.length; i--) {
// let outNumber = array.shift(); // משמשת להוצאת האיבר הראשון ממערך shift
// }
// console.log(array);



// Question 3
// כתוב קטע קוד המסיר את כל המופעים של ערך מסוים מתוך המערך
// מופעים זה ערך שכתוב למשל בתוך המערך

// let array = [100, 12, 100, 130, 44, 100]; // ניתן לראות שהערך 100 מופיע מספר פעמים
// console.log(array);

// let numberOut = 100; // משתנה עם הערך 100 , בעזרת המשתנה יהיה ניתן להסיר את הערך מהמערך

// for (let i = 0; i <= array.length; i++) {
// if (array[i] === numberOut) // תנאי/בדיקה אם הערך נמצא בתוך המערך, אם כן אז כנס לבלוק
// array.splice(i,1); // עכשיו ברגע שהלולאה תגיע לערך 100 אז הלולאה תעצור ותמחק איפה שהיא עצרה
// }
// console.log(array);