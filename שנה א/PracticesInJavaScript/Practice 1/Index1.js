// עבודת הגשה 1

// שאלה 1
            // נתונים של המוצרים //
            let hat_1={id:100, name:"Raccoon patch", price:70, description:"Visor hat with raccoon patch" ,category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' דביבון .jpg"}  
            let hat_2={id:101, name:"Zebra patch", price:60, description:"Visor hat with zebra patch", category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' זברה .jpg"}
            let hat_3={id:102, name:"eagle patch", price:50, description:"Visor hat with eagle patch", category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' נשר .jpg"}
            let hat_4={id:103, name:"Horse patch", price:40, description:"Visor hat with horse patch", category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' סוס .jpg"}
            let hat_5={id:104, name:"Patch Rooster", price:30, description:"Visor hat with a rooster patch", category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' תרנגול.jpg"} 
            let hat_6={id:105, name:"Cat patch", price:100, description:"Visor hat with cat patch", category_id:1, picture:"/28.09.2023/בניית אתר/Photos/Hats/כובע מצחייה עם פאץ' חתול .jpg"}

            // מערך של מוצרים //
            var arr_Products = [hat_1,hat_2,hat_3,hat_4,hat_5,hat_6]; 

            // קטגוריה //
            let C1={Category_id:1,CategoryNames:"Hats"};


 // שאלה 2
            // פונקציה שמוצאת את המחיר היקר ביותר  //
            function theMostExpensivePrice(){
                let maxPrice = 0;  // פעולת השמה של ערך מתוך המערך למשתנה // 
                for(let i=0; i < arr_Products.length; i++)  // i=0 
                    if( arr_Products[i].price > maxPrice) // תפקיד של [] הוא לגשת למיקום כלשהו (מערך) ולהכניס בתוך מספר שזה הוא המיקום שאותו נרצה לבדוק או להציג או לקחת מידע מסוים
                        maxPrice = arr_Products[i].price //maxPrice שווה ל0 ותבצע פעולת השמה ל i שהוא מתחיל מאפס אז תעבור מיקום מיקום מ 0,1,2,3 ... בקיצור אורך המערך ותשווה את המחיר שרום במערך מיקום  i תיגש למיקום ה 
                console.log("The most expensive price is (0)", maxPrice);
            }
            

// שאלה 3
            function sale() {
                let percent = 15;
                for(let i = 0; i < arr_Products.length;i++) 
                  products[i].price *=(1-(percent/100)); // מחיר הנחנה הוא 15 מחלקים אותו ב 100 זה יוצא 0.15 ואז
                  console.log(products[i].price.toFixed(2)) // מוסיפה כמות ספרות לפי כמה ספרות שנרצה להוסיף,  למשל פה רשמנו 2 זאת אומרת שתי ספרות אחרי הנקודה toFixed(2) הפונקציה
            }

            
//שאלה 4


// התייקרות
function increasePriceProductById(recive_Id) {
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
increasePriceProductById(3);

        

// הוזלה

function priceReducedProductById(recive_Id) {
    let increaseOneProd = 30;  // אחוז התייקרות
    let printResult = null;  // תנאי להדפסה
    arr_Products.forEach(elementArr_Products => {
        if (recive_Id === elementArr_Products.pid) {
            elementArr_Products.price = (elementArr_Products.price - ((increaseOneProd / 100) * elementArr_Products.price)); 
            printResult = elementArr_Products.price;
        }
    });
    if (printResult !== null) {
        console.log(`After increase price, the new price is: ${printResult}`);
    }
    else {
        console.log(`Product not found.`);
    }
}
priceReducedProductById(3);