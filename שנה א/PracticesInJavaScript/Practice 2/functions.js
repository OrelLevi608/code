            // עבודת הגשה 2

            // שאלה 1
            // פונקציות של חישוב ערכים

            // function func1(a,b){
            // return a+b;
            // }

            // function func1(a,b){
            // return a-b;
            // }
            // console.log(func1(5,20));

            // function func1(a,b){
            // return a/b;
            // }

            // function func1(a,b){
            // return a*b;
            // }

            // שאלה 2
            // הכנסת פונקציה לתוך משתנה

            // let num1 = function func1(a,b){
            // return a+b;
            // }

            // let num2 = function func1(a,b){
            // return a-b;
            // }
            // console.log(func1(5,20));

            // let num3 = function func1(a,b){
            // return a/b;
            // }

            // let num4 = function func1(a,b){
            // return a*b;
            // }


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

// (זה נקרא פונקציה חזרה) Callback הסבר שימוש בפונקציה 

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
