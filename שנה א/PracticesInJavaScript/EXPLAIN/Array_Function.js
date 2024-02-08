import { i, orderDetails, orders, sum1 } from "../Practice 6/Array-of-Objects_2";

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



                                                     /// Loops ,לולאות/ //






                                                     // forEach \\

// forEach  // callback function זו פונקציה מובנית במערך שמאפשרת מעבר על כל איברי המערך באמצעות פונקציית חזרה- 
// בתוך הסוגריים הצהובים רושמים פונקצייה אנונימית, ובתוך הסוגריים העגולות שבצבע סגול אנחנו יכולים להגידר שלושה פרמטרים  ,, האיבר הראשון הוא המשתנה שזה נותן את התוכן, האיבר השני הוא האינדקס (מיקום), האיבר שלישי הוא האוסף הכוונה הערך לא השם של המערך

products.forEach(function(item3,index,aa) {
    // console.log(item3); // מדפיס את המערך פעם אחת
    // console.log(index); // מדפיס את כל המיקומים פעם אחת
    // console.log(aa); // מדפיס את כל המערך כגודל המערך זאת אומרת 4 פעמיים כי גודל המערך הוא 4

    // console.log(aa[1]); // פה אני אומר לו תדפיס כגודל המערך (שהוא בגול 4) את המיקום 1 , פה אני אומר לו איזה מיקום להדפיס
}) 


// היא לא מציגה מיקום בלי ערך, ניתן לראות שיש מיקום 0,1,2 10 forEach יתרון של הפונקציה
//undefined - אין מיקומים 3,4,5,6,7,8,9 דילגנו על הכל ובכל זאת הלולאה לא תציג המיקום ללא תוכן 
let arr124 =[];
arr124[0]={pid:13, pname:"Hat Corduroy", price:50,stockQTY:130,amount:1}, 
arr124[1]={pid:14, pname:"Hat GAP", price:20,stockQTY:140,amount:1},
arr124[2]={pid:15, pname:"Hat cap", price:15,stockQTY:150 ,amount:1}, 
//דילוג על מיקומים
arr124[10]={pid:50, pname:"orel", price:1000,stockQTY:15000 ,amount:70}, // מיקום 10

arr124.forEach(function(item5,index5,ooo) {
    console.log(index5);
}) 



//-------------------------------------------------------------------------------------------------------------------//



// for in
// pid, price לולאה זאת מאפשרת לעבור על מאפיינים  לדוגמה  
for(item2 in arrProducds){ //  זה משתנה item2
    console.log(item2);
}



//-------------------------------------------------------------------------------------------------------------------//



// for of 
//  לולאה זאת מדפיסה את המיקומים במערך וגם אפשר להדפיס מערך
// מבצעת מעבר על כל איברי/אוסף המערך ומייצגת בכל סיבוב איטרציה את האיבר הנוכחי
// בצד ימין רושמים את המשתנה עם האוסף במקרה הזה מערך
let arr =[1,2,3,4,5,6,7,8,9, 10];
for(item1 of arr){
    console.log(item1);
}

//----
for(item1 of arrProducds){
    console.log(item1);
}






//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//



                                                                  ///   findindex , findLastIndex , find , findLast  - חיפוש /// 



// findindex פונקציה שנקראת 
// הפונקציה משמשת לחיפוש איבר/ערך במערך ומחזירה את מיקום/האינדקס שלו במידה נמצא, אם לא נמצא יוחזר מינוס אחת
// והיא מתחילה בחיפוש מהתחלה של המערך עד שהיא מגיע לסוף

//זה האיבר/תוכן <- element1 |  אם הפונקציה תחזיר אמת, יוחזר האינדקס/המיקום של אותו איבר שיחזיר אמת  , true or false הפונקציה אמורה להחזיר לנו או אמת או שקר 
// (function(element1,index1,rrr)  האיבר הראשון הוא המשתנה שזה נותן את התוכן, האיבר השני הוא האינדקס (מיקום), האיבר שלישי הוא האוסף הכוונה הערך , כל המערך

let products=[
    {pid:2,price:20,pname:'eggs'},
    {pid:4,price:70,pname:'bread'},
    {pid:4,price:70,pname:'cheese'},
    {pid:4,price:70,pname:'bread'},
    {pid:8,price:40,pname:'milk'}
];

let indexNumber = products.findIndex(function(element1){    // indexNumber התוצא הסופית תיכנס למשתנה 
    if(element1.pname=='bread')// עכשיו אני רוצה לשאול אם האיבר נמצא 
    return true;      
});
console.log(indexNumber);


// findLastIndex פונקציה שנקראת 
// והיא מתחיל בחיפוש מהסוף של המערך עד שהיא מגיע להתחלה
let indexNumber1 = products.findLastIndex(function(element1){    // indexNumber התוצא הסופית תיכנס למשתנה 
    if(element1.pname=='bread')// עכשיו אני רוצה לשאול אם האיבר נמצא 
    return true;      
});
console.log(indexNumber);




//------------------------------------------------------------------------------




// find פונקציה שנקראת 
// והיא מתחיל בחיפוש מהתחלה של המערך עד שהיא מגיע לסוף 

//findLast פונקציה שנקראת 
// והיא מתחיל בחיפוש מהסוף של המערך עד שהיא מגיע להתחלה

// הפונקציה משמשת לחיפוש איבר במערך ומחזירה את האיבר שנמצא, אחרת יוחזר ערך המייצג לא נמצא  
// undefined


let products2=[
    {pid:2,price:20,pname:'eggs'},
    {pid:14,price:170,pname:'bread'},
    {pid:6,price:70,pname:'cheese'},
    {pid:14,price:70,pname:'new bread'},
    {pid:8,price:40,pname:'milk'}
];

   // אפשרות 1
let productObject = products2.find(function(element2){
    if(element2.pid==14) //במערך pid=14 אם קיים הערך  
       return true;  // תחזיר אמת
   });
   
   if(productObject) //  אז כנס ותדפיס (productObject) true אם זה אמת, אם חזר משהו, אם נמצא אז כנס, זאת אומרת אם זה 
       console.log(productObject); 
   else
       console.log('not found');

   //--

    // אפשרות 2
       productObject=products2.find(function(element2){
    if(element2.pid==14)
       return true;
   });
  
   if(productObject!=undefined)  // פה השוני
       console.log(productObject);
   else
       console.log(productObject);//console.log('not found');




       // findLast //

       let productObject3 = products2.findLast(function(element2){
        if(element2.pid==14) //במערך pid=14 אם קיים הערך  
           return true;  // תחזיר אמת
       });
       
       if(productObject3) //אז כנס (productObject3) true אם זה אמת, אם חזר משהו, אם נמצא אז כנס, זאת אומרת אם זה 
           console.log(productObject3); 
       else
           console.log('not found');
    






           

//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//



                                                                  ///  סינון - filter /// 





// הפונקציה מחזירה העתק של איברים מתוך מערך, על בסיס סינון שהוגדר לה

let products6=[
    {pid:2,price:20,pname:'eggs'},
    {pid:14,price:170,pname:'bread'},
    {pid:6,price:70,pname:'cheese'},
    {pid:14,price:70,pname:'new bread'},
    {pid:8,price:40,pname:'milk'}
];

// האיבר הראשון הוא המשתנה שזה נותן את התוכן, האיבר השני הוא האינדקס (מיקום), האיבר שלישי הוא האוסף הכוונה הערך לא השם של המערך

// אפשרות 1 
let expensiveProds = products6.filter(function(element3){  //יוצר מסנן את האובייקים   filter ה 
if(element3.price>60) // שהמחיר שלהם גדול מ 60 במקרה הזה
    return true;
});
expensiveProds.forEach((element3)=>{  // והיא מציגה לנו רק את אלו שעמוד בתנאי forEach ואם התשובה היא אמת, אז פה אנחנו רצים על המערך בעזרת לולאה 
console.log(element3);
});


//----

// אפשרות 2 
let expenProds=function(element3){ // המוצר היקר
    if(element3.price>60)
        return true;
    };
let chProds=function(element3){  // המוצר הזול
    if(element3.price<30)
        return true;
    };
 let ar=products6.filter(chProds); // chProds פה אני מפעיל את התנאי של 
 ar.forEach((element3)=>{console.log(element3)});//forEach  בעזרת הלולאה  chProds ופה אני עובר על 








  //-------------------------------------------------------------------------------------------------------------------//
 //-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//



                                                                  ///  מיפוי (יוצר העתק של שדות שנבחר) - map  פונקציה /// 

 // הפונקציה מבצעת מעבר על כל איברי המערך, ומחזירה מערך חדש עם הערכים שחזרו

// האיבר הראשון הוא המשתנה שזה נותן את התוכן, האיבר השני הוא האינדקס (מיקום), האיבר שלישי הוא האוסף הכוונה הערך לא השם של המערך

let products9=[
    {pid:2,price:20,pname:'eggs'},
    {pid:14,price:170,pname:'bread'},
    {pid:6,price:70,pname:'cheese'},
    {pid:14,price:70,pname:'new bread'},
    {pid:8,price:40,pname:'milk'}
];

let prodNames=products9.map(function(el){ // אבל אני אבחר איזה שדות הוא יציג, זה יציג את כל המערך , אורך המערך לא ישתנה forEach יעבור על כל המערך כמו לולאת 
    return {pname:el.pname}; //ותביא את הערך שלו pname תיקח את האובייקט ,pname פה אני אומר  תיגש לשדה 
});
prodNames.forEach((el)=>{console.log(el)  // לעבור על כל העתק של המערך ולהדפיס הכל
});
let status=products9.every((el)=> el.price>0);
for (let i = 0; i < orderDetails.length; i++) {
    for (let j = 0; j < orders.length; j++) {
        if (orderDetails[i].oid === orders[j].oid) {
            sum1 = orderDetails.price * orderDetails.amount;
            orders.orderTotal = sum1;
        }
        if (orders.orderTotal > orderDetails.price) {
            console.log(orders.orderTotal);
        }
    }
}
