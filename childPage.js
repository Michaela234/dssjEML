// // DOM queries: 

// const url = "data.json"; 

 
 

// // Fetch the data when the DOM content is loaded 

// fetch(url) 

// .then((Response) => { 

//     //if response is not ok 

//     if(!Response.ok){ 

//         throw new Error("HTTP ERROR! Status: ${response.status}") 

//     } 

//     return Response.json(); 

// }) 

// .then((data) =>{ 

//     console.log("Data recived:", data); 

//     addData(data); //call the function, and add the data as a parameter 

// }) 

// .catch((error) =>{ 

//     console.error("Error:", error); 

// }); 

 
 
 

// function populateDOM(item){ 

//   //create new elements for the productCard 

//   const image = document.createElement("img") 

//   const title = document.createElement("h3") 

//   const description = document.createElement("p") 

 
 

//   function populateDOM(item) { 

//     // Create new elements for the productCard 

//     const image = document.createElement("img"); 

//     const title = document.createElement("h3"); 

//     const description = document.createElement("p"); 

   

//     // Set the data from the item to the elements 

//     image.src = item.image; 

//     title.textContent = item.title; 

//     description.textContent = item.description; 

   

//     // Create a container element for the product card 

//     const productCard = document.createElement("section"); 

//     productCard.classList.add("categoryCard", "categoryCard--left"); 

   

//     // Append the elements to the product card 

//     productCard.appendChild(image); 

//     const textContainer = document.createElement("section"); 

//     textContainer.classList.add("categoryCardText"); 

//     textContainer.appendChild(title); 

//     textContainer.appendChild(description); 

//     productCard.appendChild(textContainer); 

   

//     // Get the container element to append the product card 

//     const container = document.getElementById("product-container"); 

   

//     // Append the product card to the container 

//     container.appendChild(productCard); 

//   } 

 
 
 

   

// function populateDOM(item, index) { 

//   // Select the categoryCard container based on its index 

//   const categoryCardContainers = document.querySelectorAll(".categoryCard"); 

//   const container = categoryCardContainers[index]; 

 
 

//   // Create new elements for the productCard 

//   const image = document.createElement("img"); 

//   const title = document.createElement("h3"); 

//   const description = document.createElement("p"); 

 
 

//   // Set the data from the item to the elements 

//   image.src = item.image; 

//   title.textContent = item.title; 

//   description.textContent = item.description; 

 
 

//   // Append the elements to the container 

//   container.querySelector(".categoryCard__image").appendChild(image); 

//   container.querySelector(".categoryCardText__title").appendChild(title); 

//   container.querySelector(".categoryCardText__paragraph").appendChild(description); 

// } 

     

const jsonData = [ 

  { 

      "image": "jsonimages/Guidedtur_rævcard.png", 

      "title": "Guided gåtur", 

      "description": "En hyggelig gåtur med din familie i den danske natur hvor i for en hjælpsom guide som viser jer vej" 

  }, 

  { 

      "image": "jsonimages/legeplads_rævcard.png", 

      "title": "Fed naturlegeplads", 

      "description": "Brug for en god omgang leg? Hvorfor ik tage ud i og lege på naturlegepladsen i Sønderborg" 

  }, 

  { 

      "image": "jsonimages/gendarmstien_rævcard.png", 

      "title": "Gendarmstien", 

      "description": "En historisk og smuk vandretur som altid byder på noget nyt." 

  }, 

  { 

      "image": "jsonimages/krypiLy_rævcard.png", 

      "title": "Fang kryb", 

      "description": "Find seje salamander nede i skovens bund." 

  }, 

  { 

    "image": "jsonimages/Guidedtur_rævcard.png", 

    "title": "Guided gåtur", 

    "description": "En hyggelig gåtur med din familie i den danske natur hvor i for en hjælpsom guide som viser jer vej" 

}, 

{ 

    "image": "jsonimages/legeplads_rævcard.png", 

    "title": "Fed naturlegeplads", 

    "description": "Brug for en god omgang leg? Hvorfor ik tage ud i og lege på naturlegepladsen i Sønderborg" 

}, 

{ 

    "image": "jsonimages/gendarmstien_rævcard.png", 

    "title": "Gendarmstien", 

    "description": "En historisk og smuk vandretur som altid byder på noget nyt." 

}, 

{ 

    "image": "jsonimages/krypiLy_rævcard.png", 

    "title": "Fang kryb", 

    "description": "Find seje salamander nede i skovens bund." 

} 

]; 

 
 

const container = document.querySelector('.categoryCardsContainer'); 

 
 

jsonData.forEach(data => { 

  const card = document.createElement('section'); 

  card.className = 'categoryCard categoryCard--left'; 

  card.innerHTML = ` 

      <button class="categorySave addToWishList"> 

          <svg class="categorySave__icon" xmlns="http://www.w3.org/2000/svg" width="205" height="211" viewBox="0 0 205 211" fill="none"> 

              <path d="M76.9127 10.98C78.2083 4.47714 86.3981 2.28267 90.7716 7.26654L125.323 46.6408C128.797 50.599 133.996 52.5946 139.225 51.9772L191.249 45.8361C197.834 45.0588 202.452 52.1697 199.063 57.8692L172.293 102.897C169.602 107.424 169.311 112.985 171.514 117.768L193.431 165.347C196.205 171.37 190.869 177.959 184.401 176.498L133.305 164.952C128.168 163.792 122.789 165.233 118.921 168.806L80.4427 204.353C75.5723 208.853 67.6567 205.814 67.0479 199.212L62.2385 147.048C61.755 141.804 58.7222 137.134 54.1283 134.559L8.43073 108.949C2.64651 105.707 3.09024 97.2402 9.18165 94.6209L57.3059 73.9275C62.1437 71.8472 65.6481 67.5196 66.6771 62.3551L76.9127 10.98Z" fill="white" stroke="#FFCA42" stroke-width="8"/> 

          </svg> 

      </button> 

      <img class="categoryCard__image" src="${data.image}" alt=""> 

      <section class="categoryCardText"> 

          <h3 class="categoryCardText__title">${data.title}</h3> 

          <p class="categoryCardText__paragraph">${data.description}</p> 

          <a class="categoryCardLink" href="#">Læs mere</a> 

      </section> 

  `; 

  container.appendChild(card); 

}); 

 
 
 
 

//ønskeliste åben/lukket 

const wishListIcon = document.querySelector(".wishListIcons img"); 

const wishList = document.querySelector(".wishList"); 

 
 

wishListIcon.addEventListener("click", function () { 

    wishList.classList.toggle("open"); 

    // Skift ikon baseret på, om ønskelisten er åben eller lukket 

    if (wishList.classList.contains("open")) { 

        wishListIcon.src = "Childpageimages/crossIcon.png"; 

    } else { 

        wishListIcon.src = "Childpageimages/WishlistIcon.svg"; 

    } 

}); 

 
 

//få fat i knappen + kortet (clicked toggle) 

const buttons = document.querySelectorAll(".categorySave"); 

 
 

buttons.forEach(button => { 

  button.addEventListener('click', event => { 

    const starButton = event.currentTarget; //currentTarget: få fat i target ind i scriptet, ikke det hvor man faktisk klikker på 

    console.log(starButton); 

    //få fat i den rigtige card 

    const categoryCard = starButton.parentNode;  

    console.log(categoryCard); 

 
 

    //tilføj clicked klasser 

    starButton.classList.toggle('clicked'); 

    categoryCard.classList.toggle('clicked'); 

 
 

    addToWishList(categoryCard); 

 
 

  } ); 

}) 

 
 

//tilføj kort til aside 

function addToWishList(categoryCard) { 

  const wishListItem = categoryCard.cloneNode(true); 

  const wishListAside = document.querySelector(".wishList__card") 

  wishListItem.classList.add("wishList__item"); 

  wishListAside.appendChild(wishListItem); 

} 

 
 
 

//hvis aside er tom skal tekst display block og er der et kort i asiden skal teksten display none 

function addToWishList(categoryCard) { 

  const wishListItem = categoryCard.cloneNode(true); 

  const wishListAside = document.querySelector(".wishList__card"); 

  wishListItem.classList.add("wishList__item"); 

  wishListAside.appendChild(wishListItem); 

 
 

  const emptyMessage = document.querySelector('.wishlistText--empty'); 

  if (wishListAside.children.length > 0) { 

    emptyMessage.style.display = 'none'; 

  } else { 

    emptyMessage.style.display = 'block'; 

  } 

} 

 
 
 
 
 

// function addToWishList(event) { 

//   const wishListAside = document.querySelector(".wishList__card"); 

//   const categoryCard = event.currentTarget; // Get the clicked category card element 

//   const cardTitle = categoryCard.querySelector(".categoryCardText__title").innerText; 

 
 

//   // Check if the clicked card is already in the wishlist 

//   const existingCard = wishListAside.querySelector(`.wishList__item[data-title="${cardTitle}"]`); 

//   if (existingCard) { 

//     // Card already exists in the wishlist, so remove it 

//     wishListAside.removeChild(existingCard); 

//   } else { 

//     // If the card does not exist in the wishlist, clone it and add it 

//     const wishListItem = categoryCard.cloneNode(true); 

//     wishListItem.classList.add("wishList__item"); 

//     wishListItem.setAttribute("data-title", cardTitle); // Set data attribute to identify card 

//     wishListAside.appendChild(wishListItem); 

//   } 

// } 

 
 

// // Add event listener to each category card 

// const categoryCards = document.querySelectorAll(".categoryCard"); 

// categoryCards.forEach(card => { 

//   card.addEventListener("click", addToWishList); 

// }); 

 
 
 
 

// // add cart to wishlist 

// document.addEventListener("DOMContentLoaded", function () { 

//   function createWishListItem(product) { 

//     const wishListItem = product.cloneNode(true); 

//     const wishListContainer = document.querySelector(".wishList__card"); 

//     wishListItem.classList.add("wishList"); 

//     wishListContainer.appendChild(wishListItem); 

//   } 

 
 

//   // All save to wishlist buttons 

//   const saveToWishListButtons = document.querySelectorAll(".addToWishList"); 

 
 

//   saveToWishListButtons.forEach((button) => { 

//     button.addEventListener("click", (event) => { 

//       const product = event.target.closest(".categoryCard"); 

//       if (product) { 

//         createWishListItem(product); 

//       } 

//     }); 

//   }); 

// }); 

 
 
 
 
 
 
 
 
 
 
 
 

// const water = document 

// water.src = `${data}`// 

 

 