let arr = []; // זה נקרא מערך ריק


let arr1 = [1,2,3,41,5,6]; // מערך מאותחל בערכים  ,  המיקום מתחיל מאפס


//-------------------------------------------------------------------------------------------------


// אובייקטים - ישויות - עצמים
// JSON Java Script Object Notation סימון אובייקטים בשפת ג'אווה סקריפט
// אובייקט מיוצג באמצעות סוגריים מסולסלים {}

let obj={};
let prod1={Pid:4};// הגדרנו אובייקט עם שדה בודד בשם קוד מוצר ועם הערך ארבע
let prod2={Pid:34,Pname:'Bread',Price:60,Cid:[2,6,37]};
prod2.Price+=20;
console.log(`קוד המוצר הוא ${prod2.Pid} שם המוצר הוא: ${prod2.Pname}`);
for(let i=0;i<prod2.Cid.length;i++)
 console.log(prod2.Cid[i]);





let products=[
    {Pid:2,Pname:"Milk",Price:45},
    {Pid:3,Pname:"Eggs",Price:65},
    {Pid:24,Pname:"Cheese",Price:22},
    {Pid:6,Pname:"Bread",Price:17}
];
func(products,-20)
// נחשב את המחיר הכולל של כלל המוצרים שלנו
let total=0;
for(let i=0;i<products.length;i++)
    total+=products[i].Price;
console.log(total);
