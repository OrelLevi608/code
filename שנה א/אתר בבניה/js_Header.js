
/* תורשה של קישורים בחלק העליון של הדף */

// Sidenav Overlay תפריט //

class SpecialHeader extends HTMLElement
{
    connectedCallback() /* שם של הפונקציה */
    {
        /* הוא מונע שגיאות בטקסט    פותח `   ` סוגר   backticks הסימן הזה ` ` נקרא */
        this.innerHTML =`
       
        <div class="navbar">
   <a href="#home">Home</a>
   <a href="#news">News</a>
   <a href="#about">About</a>
   <a href="#contact">Contact</a>
   <div id="right_Login_Sign_Up">
     <a href="#" onclick="document.getElementById('cart').style.display='block'" style="width:auto;"><img
         class="cart_Imge" src="./Photos/Cart icons/add-to-cart.png" alt="cart"></i>
       <p id="count">0</p>
     </a>
     <a href="#" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign Up</a>
     <a href="#" onclick="document.getElementById('id012').style.display='block'" style="width:auto;">Login</a>
   </div>

   <div class="search-container">
     <form action="/action_page.php">
       <input type="text" placeholder="Search.." name="search">
       <button type="submit"><i class="fa fa-search"></i></button>
     </form>
   </div>

   <div class="dropdown">
     <button class="dropbtn">clothes
       <i class="fa fa-caret-down"></i>
     </button>
     <div class="dropdown-content">
       <a href="./html_Hats.html" target="_blank">Hats</a>
       <a href="./html_T-shirt.html" target="_blank">T-shirt</a>
       <a href="./html_Bermuda.html" target="_blank">Bermuda</a>
       <a href="./html_Shoes.html" target="_blank">Shoes</a>
     </div>
   </div>
 </div>
      `
    }
}

customElements.define('special-header', SpecialHeader)




