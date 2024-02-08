// שאלה 1
//  כתוב לולאה העוברת על מערך מדפיסה את כל איבריו ומרוקנת אותו מכלל
//  .pop האיברים תוך שימוש בפונקציה

let arrPop=[11,12,13];
for (let i=arrPop.length-1; i>=0; i--) {
    console.log(arrPop[i]);
    arrPop.pop();
    if (arrPop.length == 0) //שווה לאפס arr בדיקה האם המערך
       console.log(`Not found value in arr: ${arrPop[i]}`);
}





// שאלה 2
//  כתוב לולאה העוברת על מערך מדפיסה את כל איבריו ומרוקנת אותו מכלל
//  .shift האיברים תוך שימוש בפונקציה

let arrshift=[50,60,100];
for (let i=arrshift.length-1; i>=0; i--) {
    console.log(arrshift[i]);
    arrshift.shift();
    if (arrshift.length == 0) //שווה לאפס arr בדיקה האם המערך
        console.log(`Not found value in arr: ${arrshift[i]}`);
}





// שאלה 3
// כתוב קטע קוד המסיר את כל המופעים של ערך מסוים מתוך המערך. 

let arrIndex=[2,5,2,9,2,30,2];
let number1 = 2;
for (let i=0; i < arrIndex.length; i++) {
    if (arrIndex[i] == number1)
    arrIndex.splice(i,1);
}
console.log(arrIndex);






// שאלה 4
// כתוב קטע קוד המוסיף למערך קיים, שלושה ערכים החל מאינדקס 2

let arrS1=[5,3,4,1,9,12];
console.log(arrS1);
arrS1.splice(2,0,100,200,300);// שלוש עמודות ראשונות משמאל  - הוספה,החסרה,מיקום 
console.log(arrS1);





// שאלה 5
// כתוב קטע קוד המחפש ערך בתוך מערך ומייצר תת מערך בגודל 3 ,החל 
// מהמיקום בו נמצא הערך, במידה ולא נמצא, לא ייווצר דבר.

let arrSlice_1 = [10,20,30,40,50,60,,70];
let arrSlice_2, number2 = 20;
for (let i=0; i < arrSlice_1.length; i++) {
    if (arrSlice_1[i] == number2)
    arrSlice_2 = arrSlice_1.slice(i,4);
}
console.log(`arrSlice_2: ${arrSlice_2}`);





