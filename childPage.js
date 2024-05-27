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


function addToWishList(categoryCard) {
  const wishListItem = categoryCard.cloneNode(true);
  const wishListAside = document.querySelector(".wishList__card")
  wishListItem.classList.add("wishList__item");
  wishListAside.appendChild(wishListItem);
}





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
// water.src = `${data}`