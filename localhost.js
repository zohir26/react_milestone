// const hello = localStorage.getItem("hello");

// // button onclick function niye ekta localstorage item set korte perechi
// const local2 =() => {
//     localStorage.setItem ("age" , 20)
// }
// local2();

const addStorage= () => {
    const inputText= document.getElementById("product-name");
    const inputValue = document.getElementById ("product-quantity");
    const input= inputText.value;
    const output= inputValue.value;
     inputText.value= '';
     inputValue.value = '';
    console.log (input, output)
    displayLi(input, output);
    saveProductToLocalStorage (input, output)
    }

const displayLi= (input, output) => {
  const liContainer=  document.getElementById("li-container")
  const liClass= document.createElement("li");
  liClass.innerHTML = `${input}: ${output}`
 liContainer.appendChild (liClass);
}

// if nothing is found then an empty object will be added.
const storeCart = () => {
    let cart = {};
    const storedCart = localStorage. getItem('cart')
   // cart values have to be stringified.
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (input, output) =>{
  const displayCart = storeCart();
  displayCart[input] = output;
  const cartStringified = JSON.stringify(displayCart);
  // by which name get is done. set have to be same
  localStorage.setItem('cart' , cartStringified);
}

// Now i have to show the localStorageData 
const showLocalStorageData = () => {
    const getStoreCard = storeCart();
    for (const product in getStoreCard) {
    const quantity = getStoreCard[product]
    
    displayLi (product, quantity);
    }
}
showLocalStorageData();


//************************************************************* */
// Improved Version:
// // Function to add product to storage
// const addStorage = () => {
//     // Select input fields
//     const inputText = document.getElementById("product-name");
//     const inputValue = document.getElementById("product-quantity");
    
//     // Get trimmed values
//     const input = inputText.value.trim();
//     const output = inputValue.value.trim();

//     // Input validation
//     if (input === "" || output === "") {
//         alert("Please enter both product name and quantity.");
//         return;
//     }

//     // Clear input fields after capturing values
//     inputText.value = '';
//     inputValue.value = '';

//     console.log(input, output); // For debugging purposes

//     // Display the product on the page
//     displayLi(input, output);

//     // Save the product to localStorage
//     saveProductToLocalStorage(input, output);
// }

// // Function to display list items
// const displayLi = (input, output) => {
//     const liContainer = document.getElementById("li-container"); // Select the <ul>
//     const li = document.createElement("li"); // Create a new <li>
//     li.textContent = `${input}: ${output}`; // Set its text content
//     liContainer.appendChild(li); // Append the <li> to the <ul>
// }

// // Function to retrieve cart from localStorage
// const storeCart = () => {
//     let cart = {}; // Initialize empty cart
//     const storedCart = localStorage.getItem('cart'); // Get stored cart from localStorage
//     if (storedCart) {
//         try {
//             cart = JSON.parse(storedCart); // Parse JSON string back to object
//         } catch (e) {
//             console.error("Error parsing stored cart:", e); // Log error if parsing fails
//             cart = {}; // Reset cart to empty object
//         }
//     }
//     return cart; // Return the cart object
// }

// // Function to save product to localStorage
// const saveProductToLocalStorage = (input, output) => {
//     const cart = storeCart(); // Get current cart
//     cart[input] = output; // Add/update the product
//     const cartStringified = JSON.stringify(cart); // Convert cart object to JSON string
//     localStorage.setItem('cart', cartStringified); // Save back to localStorage
// }

// // Function to display stored cart items on page load
// const showLocalStorageData = () => {
//     const cart = storeCart(); // Get current cart
//     const liContainer = document.getElementById("li-container"); // Select the <ul>
//     liContainer.innerHTML = ""; // Clear existing list to prevent duplicates
//     for (const product in cart) { // Iterate over each product in cart
//         if (cart.hasOwnProperty(product)) { // Ensure it's a direct property
//             const quantity = cart[product]; // Get quantity
//             displayLi(product, quantity); // Display the product
//         }
//     }
// }

// // Event listener for adding products
// document.getElementById("add-button").addEventListener("click", addStorage);

// // Display stored cart items when the page loads
// window.onload = showLocalStorageData;
