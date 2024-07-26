let UserDatabase = [{uid : 1, name : 'shubh', pass : '11Ss@@'}];

if(localStorage.CJDB == undefined || localStorage.CJDB == null){
    localStorage.setItem('CJDB', JSON.stringify(UserDatabase));
}
else{
    UserDatabase.innerHTML = [localStorage.getItem('CJDB')]; // used innerHTML to Convert content from string to HTML
}

function storeDB(data){
    localStorage.setItem('CJDB', JSON.stringify(data));
    UserDatabase.innerHTML = [localStorage.getItem('CJDB')];
    localStorage.setItem('CJDB', JSON.stringify(UserDatabase));
}

function addToDB(DB, size, uname, upass){
    UserDatabase.innerHTML = DB;
    let userid = size;
    UserDatabase.push({uid : userid, name : uname, pass : upass});
    storeDB(UserDatabase);
}

let cartItems = [];
    
function addToCart(itemName, itemPrice, itemQuantity) {
    cartItems.push({name: itemName, price: itemPrice, quantity: itemQuantity});
    document.querySelector('.cart span').innerHTML = cartItems.length; //The querySelector() is a method used for searching and returning the very first element within the document that matches the given selector.
    showCart();
}

function showCart() {
    let message = '';
    if (cartItems.length === 0){
        message = '<br>Your cart is empty!';
    }
    else{
        message = '<br>You have ' + cartItems.length + ' item(s) in your cart:<br><br>';
        let total = 0;
        cartItems.forEach(item => {
            message += item.name + ' - &#8377 ' + item.price + '<br>';
            total += item.price * item.quantity;
        });
        message += '<br>Total: &#8377 ' + total;
        message += '<br><br><button id="paymentbutton">Make Payment</button>';
    }
    document.getElementById('cartcontent').innerHTML = message;
}

function removeFromCart(iname) {
  let index=0;
  var i=0;
  var found=0;

  // remove an item as Stack / LIFO structure
  cartItems.forEach(item =>{
    if(item.name == iname){
        index = i;
        found = 1;
    }
    i++;
  });

  if(found!=1){
    index = -1;
  }

  if(index!=-1){
    cartItems.splice(index, 1); // Remove 1 item at the specified index
    document.querySelector('.cart span').innerHTML = cartItems.length;
  }
  showCart();
}