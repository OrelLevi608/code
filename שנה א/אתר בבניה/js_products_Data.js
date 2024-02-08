
 // מערך של המוצרים //
 let arr_Products = [
 
  /* כובעים */
  {productId:1, id:"1", productName:"Hat raccoon", price:30, quantity:1, description:"Visor hat with raccoon patch" ,category_id:1, picture:`./Photos/Hats/Visor hat with raccoon patch.jpg`}, 
  {productId:2, id:"2", productName:"Hat zebra", price:35, quantity:1, description:"Visor hat with zebra patch", category_id:1, picture:`./Photos/Hats/Visor hat with zebra patch.jpg`},
  {productId:3, id:"3", productName:"Hat eagle", price:50, quantity:1, description:"Visor hat with eagle patch", category_id:1, picture:`./Photos/Hats/Visor hat with eagle patch.jpg`},
  {productId:4, id:"4", productName:"Hat horse", price:40, quantity:1,  description:"Visor hat with horse patch", category_id:1, picture:`./Photos/Hats/Visor hat with horse patch.jpg`},
  {productId:5, id:"5", productName:"Hat rooster", price:30, quantity:1,  description:"Visor hat with a rooster patch", category_id:1, picture:`./Photos/Hats/visor hat with a rooster patch.jpg`}, 
  {productId:6, id:"6", productName:"Hat cat", price:40, quantity:1,  description:"Visor hat with cat patch", category_id:1, picture:`./Photos/Hats/Visor hat with cat patch.jpg`},
  {productId:7, id:"7", productName:"Hat puma hat", price:20, quantity:1,  description:"Beige puma hat" ,category_id:1, picture:`./Photos/Hats/'Beige puma hat.jpg`},  
  {productId:8, id:"8", productName:"Hat cap", price:25, quantity:1, description:"Unisex embroidered logo visor cap", category_id:1, picture:`./Photos/Hats/Unisex embroidered logo visor cap.jpg`},
  {productId:9, id:"9", productName:"Hat puma hat", price:25, quantity:1,  description:"Black puma hat", category_id:1, picture:`./Photos/Hats/Black puma hat.jpg`},
  {productId:10, id:"10", productName:"Hat Adidas", price:40, quantity:1,  description:"Adidas visor cap", category_id:1, picture:`./Photos/Hats/Adidas visor cap.jpg`},
  {productId:11, id:"11", productName:"Hat bulldog", price:30, quantity:1,  description:"Visor hat with bulldog patch", category_id:1, picture:`./Photos/Hats/Visor hat with bulldog patch.jpg`} ,
  {productId:12, id:"12", productName:"Hat Bucket hat", price:35, quantity:1,  description:"Bucket hat with eye patch", category_id:1, picture:`./Photos/Hats/Bucket hat with eye patch.jpg`},    
  {productId:13, id:"13", productName:"Hat Corduroy", price:50, quantity:1,  description:"Corduroy visor hat with logo" ,category_id:1, picture:`./Photos/Hats/Corduroy visor hat with logo.jpg`},  
  {productId:14, id:"14", productName:"Hat GAP", price:20, quantity:1,  description:"GAP visor cap", category_id:1, picture:`./Photos/Hats/GAP visor cap.jpg`},
  {productId:15, id:"15", productName:"Hat cap", price:15, quantity:1,  description:"Unisex striped print visor hat", category_id:1, picture:`./Photos/Hats/Unisex striped print visor hat.jpg`},
  {productId:16, id:"16", productName:"Hat Corry-Div", price:40, quantity:1,  description:"Corry-Div Model Grown", category_id:1, picture:`./Photos/Hats/DIESEL - CORRY-DIV HAT model hat.jpg`},

  /* חולצות */
  {productId:17, id:"17", productName:"T-shirt Hugo", price:150, quantity:1,  description:"Beige Hugo t-shirt", category_id:2, picture:`./Photos/T-shirt/Beige Hugo t-shirt.jpg`},
  {productId:18, id:"18", productName:"T-shirt Tommy Hilfiger", price:120, quantity:1, description:"Beige Tommy Hilfiger t-shirt", category_id:2, picture:`./Photos/T-shirt/Beige Tommy Hilfiger t-shirt.jpg`},
  {productId:19, id:"19", productName:"T-shirt Armani Jeans", price:130, quantity:1, description:"Black Armenian t-shirt" ,category_id:2, picture:`./Photos/T-shirt/Black Armenian t-shirt.jpg`},
  {productId:20, id:"20", productName:"T-shirt Calvin Klein", price:110, quantity:1, description:"Black Calvin Klein t-shirt", category_id:2, picture:`./Photos/T-shirt/Black Calvin Klein t-shirt.jpg`},
  {productId:21, id:"21", productName:"T-shirt Paul Shark", price:125, quantity:1, description:"Black Paul Shark t-shirt", category_id:2, picture:`./Photos/T-shirt/Black Paul Shark t-shirt.jpg`},
  {productId:22, id:"22", productName:"T-shirt Philipp Plein", price:155, quantity:1, description:"Black Philipp Plein t-shirt", category_id:2, picture:`./Photos/T-shirt/Black Philipp Plein t-shirt.jpg`},
  {productId:23, id:"23", productName:"T-shirt Boss", price:200, quantity:1, description:"Boss t-shirt in gray color", category_id:2, picture:`./Photos/T-shirt/Boss t-shirt in gray color.jpg`}, 
  {productId:24, id:"24", productName:"T-shirt Calvin Klein", price:160, quantity:1, description:"Calvin Klein white t-shirt", category_id:2, picture:`./Photos/T-shirt/Calvin Klein white t-shirt.jpg`},
  {productId:25, id:"25", productName:"T-shirt Diesel", price:165, quantity:1, description:"Diesel t-shirt in white color model", category_id:2, picture:`./Photos/T-shirt/Diesel t-shirt in white color model.jpg`}, 
  {productId:26, id:"26", productName:"T-shirt Dolce & Gabbana", price:170, quantity:1, description:"Dolce and Gabbana white t-shirt", category_id:2, picture:`./Photos/T-shirt/Dolce and Gabbana white t-shirt.jpg`},
  {productId:27, id:"27", productName:"T-shirt Model Grown", price:180, quantity:1, description:"T-shirt grown in black color model" ,category_id:2, picture:`./Photos/T-shirt/T-shirt grown in black color model.jpg`},  
  {productId:28, id:"28", productName:"T-shirt Kamal Grown", price:145, quantity:1, description:"T-shirt grown in Kamal color", category_id:2, picture:`./Photos/T-shirt/T-shirt grown in Kamal color.jpg`},
  {productId:29, id:"29", productName:"T-shirt Ralph Lauren", price:115, quantity:1, description:"Turquoise Ralph Lauren t-shirt", category_id:2, picture:`./Photos/T-shirt/Turquoise Ralph Lauren t-shirt.jpg`},
  {productId:30, id:"30", productName:"T-shirt Hugo Boss", price:148, quantity:1, description:"White Hugo t-shirt", category_id:2, picture:`./Photos/T-shirt/White Hugo t-shirt.jpg`},
  {productId:31, id:"31", productName:"T-shirt Paul Shark Grown", price:190, quantity:1, description:"White Paul Shark t-shirt", category_id:2, picture:`./Photos/T-shirt/White Paul Shark t-shirt.jpg`}, 
  {productId:32, id:"32", productName:"T-shirt Armani", price:199, quantity:1, description:"Black Armani t-shirt model EMPORIO ARMANI", category_id:2, picture:`./Photos/T-shirt/Black Armani t-shirt model EMPORIO ARMANI.jpg`},

  /* ברמודות */
  {productId:33, id:"33", productName:"Bermuda Boss Pants", price:30, quantity:1, description:"Beige velvet bermuda pants", category_id:3, picture:`./Photos/Bermuda/Beige velvet bermuda pants.webp`}, 
  {productId:34, id:"34", productName:"Bermuda Diesel Jeans", price:50, quantity:1, description:"Bermuda jeans with beige tears", category_id:3, picture:`./Photos/Bermuda/Bermuda jeans with beige tears.webp`},
  {productId:35, id:"35", productName:"Bermuda Paul Shark Tears", price:45, quantity:1, description:"Bermuda black tears" ,category_id:3, picture:`./Photos/Bermuda/Bermuda black tears.webp`}, 
  {productId:36, id:"36", productName:"Bermuda Philipp Plein", price:40, quantity:1, description:"Bermuda jeans with blue tears", category_id:3, picture:`./Photos/Bermuda/Bermuda jeans with blue tears.webp`},
  {productId:37, id:"37", productName:"Bermuda Ralph Lauren", price:30, quantity:1, description:"Bermuda jeans with gray tears", category_id:3, picture:`./Photos/Bermuda/Bermuda jeans with gray tears.webp`},
  {productId:38, id:"38", productName:"Bermuda Calvin Klein", price:35, quantity:1, description:"Bermuda jeans with light blue tears", category_id:3, picture:`./Photos/Bermuda/Bermuda jeans with light blue tears.webp`},
  {productId:39, id:"39", productName:"Bermuda Armani", price:25, quantity:1, description:"Bermuda jeans with tears in white", category_id:3, picture:`./Photos/Bermuda/Bermuda jeans with tears in white.webp`}, 
  {productId:40, id:"40", productName:"Bermuda Hugo", price:25, quantity:1, description:"Bermuda pants in soft fabric with a faded effect in black", category_id:3, picture:`./Photos/Bermuda/Bermuda pants in soft fabric with a faded effect in black.webp`},
  {productId:41, id:"41", productName:"Bermuda Dolce and Gabbana", price:45, quantity:1, description:"Bermuda pants in soft fabric with a faded effect in white", category_id:3, picture:`./Photos/Bermuda/Bermuda pants in soft fabric with a faded effect in white.webp`}, 
  {productId:42, id:"42", productName:"Bermuda Tommy", price:40, quantity:1, description:"Bermuda pants in soft fabric with a gray faded effect", category_id:3, picture:`./Photos/Bermuda/Bermuda pants in soft fabric with a gray faded effect.webp`},
  {productId:43, id:"43", productName:"Bermuda Model Grown", price:30, quantity:1, description:"Bermuda pants with tears and splash effect black color" ,category_id:3, picture:`./Photos/Bermuda/Bermuda pants with tears and splash effect black color.webp`},  
  {productId:44, id:"44", productName:"Bermuda Kamal Grown", price:25, quantity:1, description:"Bermuda pants with tears and splash effect white color", category_id:3, picture:`./Photos/Bermuda/Bermuda pants with tears and splash effect white color.webp`},
  {productId:45, id:"45", productName:"Bermuda Hugo Boss", price:55, quantity:1, description:"Black velvet bermuda pants", category_id:3, picture:`./Photos/Bermuda/Black velvet bermuda pants.webp`},
  {productId:46, id:"46", productName:"Bermuda Paul Shark Grown", price:60, quantity:1, description:"Denim bermuda pants with black print", category_id:3, picture:`./Photos/Bermuda/Denim bermuda pants with black print.webp`},
  {productId:47, id:"47", productName:"Bermuda Lacoste", price:50, quantity:1, description:"Tailored bermuda pants in black", category_id:3, picture:`./Photos/Bermuda/Tailored bermuda pants in black.webp`} ,
  {productId:48, id:"48", productName:"Bermuda Nautica", price:35, quantity:1, description:"Bermuda Nautica in black", category_id:3, picture:`./Photos/Bermuda/Bermuda Nautica in black .jpg`},

  /* נעליים */
  {productId:49, id:"49", productName:"Shoe Berber", price:80, quantity:1, description:"Beige Berber shoe", category_id:4, picture:`./Photos/Shoes/Beige Berber shoe.jpg`}, 
  {productId:50, id:"50", productName:"Shoe Armani ", price:85, quantity:1, description:"Black Armani shoe", category_id:4, picture:`./Photos/Shoes/Black Armani shoe.jpg`},
  {productId:51, id:"51", productName:"Shoe Diesel ", price:90, quantity:1, description:"Black diesel shoe with a white stripe" ,category_id:4, picture:`./Photos/Shoes/Black diesel shoe with a white stripe.jpg`}, 
  {productId:52, id:"52", productName:"Shoe Nautica", price:100, quantity:1, description:"Black nautica shoe", category_id:4, picture:`./Photos/Shoes/Black nautica shoe .jpg`},
  {productId:53, id:"53", productName:"Shoe Paul Shark", price:105, quantity:1, description:"Black Paul Shark shoe", category_id:4, picture:`./Photos/Shoes/Black Paul Shark shoe.jpg`},
  {productId:54, id:"54", productName:"Shoe Ripley", price:120, quantity:1, description:"Black Ripley sneakers", category_id:4, picture:`./Photos/Shoes/Black Ripley sneakers.jpg`},
  {productId:55, id:"55", productName:"Shoe Boss", price:150, quantity:1, description:"Boss shoe in black color with gold touches", category_id:4, picture:`./Photos/Shoes/Boss shoe in black color with gold touches.jpg`},
  {productId:56, id:"56", productName:"Shoe Calvin Klein", price:130, quantity:1, description:"Discord shoe in black color with a white stripe", category_id:4, picture:`./Photos/Shoes/Discord shoe in black color with a white stripe.jpg`}, 
  {productId:58, id:"58", productName:"Shoe Ralph Lauren", price:140, quantity:1, description:"Discord shoe in black color", category_id:4, picture:`./Photos/Shoes/Discord shoe in black color.jpg`},
  {productId:59, id:"59", productName:"Shoe Lacoste", price:150, quantity:1, description:"Lacoste shoe in black color" ,category_id:4, picture:`./Photos/Shoes/Lacoste shoe in black color.jpg`},  
  {productId:60, id:"60", productName:"Shoe Hugo Boss", price:200, quantity:1,  description:"MS white Gant shoe model", category_id:4, picture:`./Photos/Shoes/MS white Gant shoe model.jpg`},
  {productId:61, id:"61", productName:"Shoe Veja", price:160, quantity:1, description:"Veja shoe in white color", category_id:4, picture:`./Photos/Shoes/Veja shoe in white color.jpg`},
  {productId:62, id:"62", productName:"Shoe Tommy", price:170, quantity:1, description:"White baller shoe", category_id:4, picture:`./Photos/Shoes/White baller shoe.jpg`},
  {productId:63, id:"63", productName:"Shoe Prada", price:110, quantity:1, description:"Prada black with White", category_id:4, picture:`./Photos/Shoes/Black Ripley sneakers.jpg`}, 
  {productId:64, id:"64", productName:"Shoe Gabbana", price:135, quantity:1, description:"White Dolce & Gabbana shoe", category_id:4, picture:`./Photos/Shoes/Black Armani shoe.jpg`},
  ];
 
  // מערך של קטגוריות של מוצרים //
  let arr_Categories = [
  {Cat_id:1, CategoryNames:`Hats`},
  {Cat_id:2, CategoryNames:`T-shirt`},
  {Cat_id:3, CategoryNames:`Bermuda`},
  {Cat_id:4, CategoryNames:`Shoes`},
  ];

  //------------------------------------------------------------------------------------------//



  // עגלת קניות

  let shoppingCart  = [];



  //------------------------------------------------------------------------------------------//



  // פונקציה לריקון (מערך ריק)

      function EmtyCart() {
          let cart = [];
      };



  //------------------------------------------------------------------------------------------//


   // הוספה ועדכון
   //פונקציה לעדכון העלאה של כמות ולהוספה של מוצר לתוך סל בקניות

function AddProduct_UpdateUpload_InCart(prod_Id, QTY) {
  let res = null;
  // אם נמצא שזה תואם כנס
  shoppingCart.forEach(item => {
    if (prod_Id === item.productId) {
      item.quantity += QTY;  // הוספה/לסכום כמות
      res = item;
    }
  });

  //כנס null שווה ל res אם
  // אם לא נמצא שזה תואם לא להכנס
  if (res === null) { 
    shoppingCart.push({ productId: prod_Id, quantity: QTY }); //   מציין איך ליצור אובייקט ,  prod_Id  ? ואיזה מספר , ID ? (productId:) מה איזה סוג 
    res = shoppingCart[shoppingCart.length - 1];  //  מחזיר את האינדקס של האיבר האחרון במערך. בקצרה, הביטוי הזה משמש לשליפת האיבר האחרון מתוך המערך
  }

  // הדפסה של התוצאה
  console.log(`The ID Product is: ${res.productId},`+ " " + `The quantity is: ${res.quantity}`);
};


  //------------------------------------------------------------------------------------------//


  // מחיקה ועדכון
  // פונקציה לעדכון הורדה של כמות ולמחיקה של מוצר מתוך עגלה רק אם הכמות מגיה ל אפס 

  function updateReduce_ZeroDelete(prod_Id, QTY) {
    let resRemove = null;
  
    // עבור כל איבר במערך
    for (let i = 0; i < shoppingCart.length; i++) {
      const item = shoppingCart[i];
  
      // אם המוצר נמצא בעגלת הקניות
      if (prod_Id === item.productId) {
        // עדכן את הכמות של המוצר
        item.quantity -= QTY;
        resRemove = item;
  
        // אם הכמות ירדה לאפס, הסר את המוצר מהעגלה
        if (item.quantity === 0) {
          shoppingCart.splice(i, 1);
        }
        break; 
      }
    }
  
    // הדפסה של התוצאה
    if (resRemove !== null) {
      console.log(`The ID Product is: ${resRemove.productId}, The quantity is: ${resRemove.quantity}`);
    }
  }
  


  //------------------------------------------------------------------------------------------//



  // מחק בלחיצה אחת
  // פונקציה למחיקה של המוצר מתוך סל הקניות גם אם יהיה כמות 100 בפעם אחת

  function deleteWith_OneClick(Prod_ID) {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].productId === Prod_ID) {
        shoppingCart.splice(i, 1);
        break; // יציאה מהלולאה לאחר המחיקה
      }
    }
  }



  //------------------------------------------------------------------------------------------//


  // פונקציה המחזירה את המחיר היקר ביותר ואת השם של המוצר

  // function TheExpensiveProductMost() {
  //     let arrRgetArray = null;
  //     let expensiveProduct = 0;  // פעולת השמה של אובייקט בתוך המערך שנמצא במיקום אפס
  //     arr_Products.forEach(elementArr_Products => {  // לולאה העוברת על מערך המוצרים
  //         if (expensiveProduct < elementArr_Products.price) {
  //             expensiveProduct = elementArr_Products.price;
  //             arrRgetArray = elementArr_Products;
  //         }
  //     })
  //     if (arrRgetArray !== null) {
  //         console.log(`The most expensive product: ${arrRgetArray.productName}, the price is: ${expensiveProduct}`)
  //     }
  // };
  // TheExpensiveProductMost();



  //------------------------------------------------------------------------------------------//



  // price increase פונקציה ליקור מחיר של כל המוצרים

  // function increasePrice() {
  //     let priceIncrease = 30;  // אחוז התייקרות
  //     arr_Products.forEach(elementArr_Products => {
  //         let resultAfterDiscount = (((priceIncrease / 100) * elementArr_Products.price) + elementArr_Products.price);                        
  //         console.log(`After increase price for product ${elementArr_Products.productName} is: ${resultAfterDiscount}`);
  //     });
  // };



  //------------------------------------------------------------------------------------------//



  //price reduction פונקציה להוזלה מחיר של כל המוצרים

  // function reductionPrice() {
  //     let Discount = 30;  // אחוז הנחה
  //     arr_Products.forEach(elementArr_Products => {
  //         let resultAfterDiscount = (elementArr_Products.price - ((Discount / 100) * elementArr_Products.price));                        
  //         console.log(`After increase price for product ${elementArr_Products.productName} is: ${resultAfterDiscount}`);
  //     });
  // };



  //------------------------------------------------------------------------------------------//



  // id פונקציה להתייקרות מחיר של מוצר מסוים לפי

  // function increaseProductById(recive_Id) {
  //     let increaseOneProd = 30;  // אחוז התייקרות
  //     let printResult = null;  // תנאי להדפסה
  //     arr_Products.forEach(elementArr_Products => {
  //         if (recive_Id === elementArr_Products.productId) {
  //             elementArr_Products.price = (((increaseOneProd / 100) * elementArr_Products.price) + elementArr_Products.price); 
  //             printResult = elementArr_Products.price;
  //         }
  //     });
  //     if (printResult !== null) {
  //         console.log(`After increase price, the new price is: ${printResult}`);
  //     }
  //     else {
  //         console.log(`Product not found.`);
  //     }
  // }
  // increaseProductById(3);



  //------------------------------------------------------------------------------------------//



  // id פונקציה להוזלה מחיר של מוצר מסוים לפי

  // function priceReducedProductById(recive_Id) {
  //     let increaseOneProd = 30;  // אחוז הנחה
  //     let printResult = null;  // תנאי להדפסה
  //     arr_Products.forEach(elementArr_Products => {
  //         if (recive_Id === elementArr_Products.productId) {
  //             elementArr_Products.price = (elementArr_Products.price - ((increaseOneProd / 100) * elementArr_Products.price)); 
  //             printResult = elementArr_Products.price;
  //         }
  //     });
  //     if (printResult !== null) {
  //         console.log(`After increase price, the new price is: ${printResult}`);
  //     }
  //     else {
  //         console.log(`Product not found.`);
  //     }
  // };
  // priceReducedProductById(3);


  //------------------------------------------------------------------------------------------//






  // / פונקציה המציגה את שמות ומחירים של המוצרים שנמצאים בתוך סל הקניות

  // function displayCart1() {
  //     shoppingCart.forEach(elementDisplay => {
  //         console.log(`The name of product: ${elementDisplay.productName}, The price: ${elementDisplay.price}.`);
  //     });
  // };



  //------------------------------------------------------------------------------------------//


  // פונקציה המחשבת את סכום הכולל שבסל הקניות ומחזירה את הסכום

  function getTotalCart(){
    let total=0;
    for(let i=0;i<shoppingCart.length;i++){
      for(let j=0;j<arr_Products.length;j++){
        if(shoppingCart[i].productId==arr_Products[j].productId){
            total+=(arr_Products[j].price*shoppingCart[i].quantity);
        }
      };
    };
    document.getElementById("total").innerText="Total :" + total + "$";
   };





  //------------------------------------------------------------------------------------------//



  // סיכום של כל הפריטים שיש בעגלת הקניות, כולל: שם פריט, כמות פריט, מחיר פריט וסה"כ לתשלום על כל הפריטים בסל קניות
  
  // function ShoppingBasketSummary() {
  //     let total = null;
      
  //     arr_Products.forEach(elementArr_Products => {
  //         let copyArray = null;
  //         let toatlPrice = 0; // מציג את הסכום הכולל של מוצר שנמצא בתוך סל הקניות
  //         let toatlQuantity = 0; // מציג את הכמות הכוללת של מוצר שנמצא בתוך סל הקניות
  
  //         shoppingCart.forEach(element_BasketSummary => {
  //             if (elementArr_Products.productId === element_BasketSummary.productId) {
  //                 toatlQuantity += element_BasketSummary.quantity;
  //                 toatlPrice += element_BasketSummary.price;
  //                 copyArray = element_BasketSummary;
  //             }
  //         });
  //         if (copyArray !== null) {
  //             console.log(`Name product: ${copyArray.productName}, quantity product: ${toatlQuantity}, the total price for this product: ${toatlPrice}$`);
  //         }
  //     });



  // סכום הכולל שבסל הקניות
  

  //     shoppingCart.forEach(elementShoppingCart => {
  //         total += elementShoppingCart.price;
  //     });
  //     console.log(`The total amount in your cart is: ${total}$.`);
  // };
  // ShoppingBasketSummary();



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------//





function displayProducts(productsArray, containerId) {
  let htmlString = "";
  for (let i = 0; i < productsArray.length; i++) {
      let product = productsArray[i];
      htmlString += '<div class="product-area">';
      htmlString += '<h2 class="header-img">' + product.productName + '</h2>';
      htmlString += '<p class="description-img">' + product.description + '</p>';
      htmlString += '<div><img class="img-picture" src="' + product.picture + '"></div>';
      htmlString += '<p class="price">' + product.price + '</p>';
      htmlString += '<button class="button-add-to-cart" type="button" onclick="AddProduct_UpdateUpload_InCart(' + product.productId + ',1), getTotalCart(), ShowCart()">Add to cart</button>';
      htmlString += '<button class="button-remove-from-cart" type="button" onclick="updateReduce_ZeroDelete(' + product.productId + ', 1)">Remove</button>';
      htmlString += '</div>';
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById(containerId).innerHTML = htmlString;
});

}



// דוגמה לשימוש בפונקציה

displayProducts(arr_Products.filter(product => product.category_id === 1), "hatsContainer"); // עבור כובעים
displayProducts(arr_Products.filter(product => product.category_id === 2), "tShirtsContainer"); // עבור חולצות
displayProducts(arr_Products.filter(product => product.category_id === 3), "bermudasContainer"); // עבור ברמודות
displayProducts(arr_Products.filter(product => product.category_id === 4), "shoesContainer"); // עבור נעליים

displayCategory(1, "hatsContainer");
displayCategory(2, "tShirtsContainer");
displayCategory(3, "bermudasContainer");
displayCategory(4, "shoesContainer");




// מוצרים שנמצאים בתוך סל הקניות
function ShowCart() {
  let cartHTML = "";

  for (let i = 0; i < arr_Products.length; i++) {
    for (let j = 0; j < shoppingCart.length; j++) {
      if (shoppingCart[j].productId === arr_Products[i].productId) {
        cartHTML += '<ul class="cart-items">';
        cartHTML += '<li class="cart-item">';
        cartHTML += '<img class="image_In_Cart" src="' + arr_Products[i].picture + '">';
        cartHTML += '<div id="productName">' + arr_Products[i].productName + '</div>';
        cartHTML += '<div class="quantity">';
        cartHTML += '<button class="minus" onclick="updateReduce_ZeroDelete(' + arr_Products[i].productId + ',1), ShowCart()"> - </button>';
        cartHTML += '<span>' + shoppingCart[j].quantity + '</span>';
        cartHTML += '<button class="plus" onclick="updateReduce_ZeroDelete(' + arr_Products[i].productId + ',-1), ShowCart()"> + </button>';
        cartHTML += '</div>';
        cartHTML += '<div class="price">' + arr_Products[i].price * shoppingCart[j].quantity + '$' + '</div>';
        cartHTML +=  '<button type="button" onclick="deleteWith_OneClick(' + arr_Products[i].productId + ',1), ShowCart()"> <img class="trash" src="/Photos/Trash/delete.png"> </button>';
        cartHTML += '</li>';
        cartHTML += '</ul>';
      }
    }
  }

  document.getElementById("cart-item").innerHTML = cartHTML;

  // הוספה של מאזיני אירועים ללחצני הפלוס והמינוס
  var raiseElementButton = document.getElementsByClassName('plus');
  var decreaseElementButton = document.getElementsByClassName('minus');

  for (var i = 0; i < raiseElementButton.length; i++) {
    raiseElementButton[i].addEventListener('click', function (event) {
      updateQuantity(event, 1);
    });

    decreaseElementButton[i].addEventListener('click', function (event) {
      updateQuantity(event, -1);
    });
  }
} // ShowCart סגירת הפונקציה של 

function updateQuantity(event, change) {
  var buttonClicked = event.target;
  var quantityElement = buttonClicked.parentElement.querySelector('span');
  var currentQuantity = parseInt(quantityElement.textContent);
  var newQuantity = currentQuantity + change;

  if (newQuantity >= 0) {
    quantityElement.textContent = newQuantity;
    // Additional logic to update the shopping cart array if needed
  }
  // Update the total price and any other necessary logic here

  /*-------------------------------------------------------------------------------------*/

  document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;
  
    // כאן יש לבצע את האימות של פרטי הכרטיס
    // ולהשתמש ב-API של שירות התשלומים לביצוע התשלום
  
    alert('תשלום בוצע בהצלחה');
  });
  
};
