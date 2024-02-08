// Quesion 1  ??
// צרו פונקציות אסינכרוניות עבור פעולות חיבור, חיסור, כפל וחילוק . 
// כתבו קטע קוד המפעיל את הפונקציות ומדפיס את התוצאות שלהם  


// ? כיצד התגברתם על האסינכרוניות
//call back תשובה: הדרך להתמודד עם קוד אסינכרוני  היא באמצעות פונקציות חזרה


// function bigMain(num1, num2, callBackFunc) { 
//     setTimeout(()=>{
//         callBackFunc(num1, num2);  // (פונקציה חזרה) Callback עצם העובדה שאני יוצר פרמטר כפונקציה, זה אומר שזו פונקציה 
//     }, 3000);
// };
// let number1 = 10;
// let number2 = 2;
// bigMain(number1, number2, function(){console.log(number1 + number2)});  //הפונקציה האנונימית היא למעשה הפרמטר השלישי והיא הפונקציה חזרה // num1, num2 הם בעצם הפרמטרים number1, number2 שתי המשתנים 
// bigMain(number1, number2, function(){console.log(number1 - number2)});
// bigMain(number1, number2, function(){console.log(number1 * number2)});
// bigMain(number1, number2, function(){console.log(number1 / number2)});





//Quesion 2
// כתבו פונקציה המקבלת פונקציית חזרה ומפעילה אותה לאחר המתנה של 
// שתי שניות 


// function getAction(myFuncCallback){ //myFuncCallback פרמטר בשם
//     setTimeout(()=>{myFuncCallback()  // (פונקציה חזרה) Callback עצם העובדה שאני יוצר פרמטר כפונקציה, זה אומר שזו פונקציה 
//     }, 2000);
//     }
//     function test(){  // ניתן לראות בזימון של הפונקציה למטה .Callback פונקציה זו (טסט) החלתי עליה את הפונקציה
//        console.log(`Hello !!!`);
//     }
//     //וכתוצאה מכך מוחזר הערך (test) פעולת בתוך הפונקציה השנייה Callback שבתוך יש פונקציה שנייה אז הפונקציה השמורה בתוכנה  getAction בגלל שפה הפעלתי את הפונקציה של 
//     getAction(test);  //Callback אז כל פונקציה חדשה אני יוכל להחיל עליה את פעולת הפונקציה של Callback לסיכום: אם יש בתוך פונקציה מסוימת את פונקציה
        




//Quesion 3
// את החזקה השנייה שלו Promise כתבו פונקציה המקבלת מספר שלם ומחזירה באמצעות

// function promiseFunc(num) {
//    return new Promise((resolve,reject)=> {
//     if (typeof num === 'number')
//         setTimeout(()=>{resolve(Math.pow(num,num))}) }, 2000);
// };
//  promiseFunc(3).then((reso)=>{  //reso יהיה הקלט של resolve הערך של 
//     console.log(reso);
// });


// אני השתמשתי ב שלוש פעמים === וזאת הסיבה
// true הבבדל בין == לבין === הוא ש == תמיד משנה את שתי הערכים לאותו סוג (מחרוזת או מספרים) בכך תמיד התשובה תיהיה אמת//
// לא משנה את הסוג לאותו דבר, הוא בודק בידיוק לפי הקוד שנכתב ובכך הוא מחזיר תשובה מדויקת ===  //










//Quesion 4
// כתבו פונקציה המקבלת מערך של קישורים לכתובות אינטרנט, הפונקציה
// שחזר לכל אחת מהכתובות ותדפיס לקונסול את התוכן fetch תבצע קריאת 


// let arr = ['https://mail.google.com/', 'https://yedionashdod.college.org.il/', 'http://www.zap.co.il']
// function printFuncRetch(res) {
// };
// for (let i = 0; i < arr.length; i++) {  //כדי להדפיס את כל המערך for הצורך בלולאת 
//     fetch(arr[i]).then((res)=>{return res.text()}).then((print1)=>{console.log(print1)}); //ואז אני אומר לו תחזיר לי את הקוד בפורמט של טקסט res יגיע לפרמטר fetch(...) מה שבתוך פונצקיית 
//   printFuncRetch(arr[i]);
// };






//Quesion 5
// .async/await כתבו קטע קוד המבצע קריאה למספר פונקציות אסינכרוניות, ה יעזרו ב 


// async function func_A(){
//   return 5;
// }
// async function func_B(){
//   return 10;
// }
// async function func_C(){
//   return 20;
// }
// async function func_D(){
//   return 10;
// }

// // async יכולה לפעול אך ורק בפונקציה אסינכרוני שזו פונקציה עם המילה השמורה await המילה השמורה
// async function funcMain(){
// let numOfFunc_A = await func_A();
// let numOfFunc_B = await func_B();
// let numOfFunc_C = await func_C();
// let numOfFunc_D = await func_D();
// let sum = numOfFunc_A + numOfFunc_B + numOfFunc_C + numOfFunc_D;
// console.log(`the result is: ${sum}`);
// }
// funcMain(); // Print function
