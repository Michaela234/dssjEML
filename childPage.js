<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", function () {
  // Selects the wish list icon element.
  const wishListIcon = document.querySelector(".wishListIcons img");

  // Selects the wish list container.
  const wishList = document.querySelector(".wishList");

  // Adds a click event listener to the wish list icon.
  wishListIcon.addEventListener("click", function () {
    // Toggles the "open" class on the wish list container to show/hide it.
=======
const wishListIcon = document.querySelector(".wishListIcons img");
const wishList = document.querySelector(".wishList");

wishListIcon.addEventListener("click", function () {
>>>>>>> Stashed changes
    wishList.classList.toggle("open");

    // Changes the icon based on whether the wish list is open or closed.
    if (wishList.classList.contains("open")) {
<<<<<<< Updated upstream
      // If the wish list is open, change the icon to the cross icon.
      wishListIcon.src = "Childpageimages/crossIcon.png";
    } else {
      // If the wish list is closed, change the icon to the wishlist icon.
      wishListIcon.src = "Childpageimages/WishlistIcon.svg";
=======
        wishListIcon.src = "Childpageimages/crossIcon.png";
    } else {
        wishListIcon.src = "Childpageimages/WishlistIcon.svg";
>>>>>>> Stashed changes
    }
});

<<<<<<< Updated upstream
// This event listener waits for the HTML document to be fully loaded before executing the JavaScript code inside it.
document.addEventListener("DOMContentLoaded", (event) => {
  // Selects the button with the class categorySave.
  const button = document.querySelector(".categorySave");

  // Adds a click event listener to the button.
  // When the button is clicked, it toggles the "clicked" class on itself.
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

// Wishlist:

// This event listener waits for the HTML document to be fully loaded before executing the JavaScript code inside it.
document.addEventListener("DOMContentLoaded", function () {
  // Selects the container where wish list items will be displayed.
  const wishListContainer = document.querySelector(".wishList__card");

  // Selects the message element that indicates the wish list is empty.
  const emptyMessage = document.querySelector(".wishlistText--empty");

  // This function checks if there are any items in the wish list.
  // If there are items, it hides the empty message.
  // If there are no items, it displays the empty message.
  function checkWishList() {
    if (wishListContainer.children.length > 0) {
      emptyMessage.classList.remove("wishlistText--empty");
      emptyMessage.style.display = "none";
    } else {
      emptyMessage.classList.add("wishlistText--empty");
      emptyMessage.style.display = "block";
    }
=======

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
>>>>>>> Stashed changes
  }
}

<<<<<<< Updated upstream
  // This function creates a new wish list item.
  // It clones the product element that was clicked, adds a class to it, appends it to the wish list container,
  // and then calls checkWishList to update the empty message display.
  function createWishListItem(product) {
    const wishListItem = product.cloneNode(true);
    wishListItem.classList.add("wishList__item");
    wishListContainer.appendChild(wishListItem);
    checkWishList();
  }

  // This function checks if an item with a specific productId is already present in the wish list.
  // It queries all wish list items and compares their data-id attributes with the productId.
  // If a match is found, it returns true, otherwise false.
  function isItemInWishList(productId) {
    const existingItems = document.querySelectorAll(".wishList__item");
    for (const item of existingItems) {
      if (item.getAttribute("data-id") === productId) {
        return true;
      }
    }
    return false;
  }

  // Selects all elements with the class addToWishList, which are the buttons that allow users to add products to their wish list.
  const saveToWishListButtons = document.querySelectorAll(".addToWishList");

  // Adds click event listeners to all "Save to Wishlist" buttons.
  // When a button is clicked, it finds the closest .categoryCard element (which represents the product being saved),
  // retrieves its data-id attribute, checks if the product is already in the wish list,
  // and if not, creates a new wish list item using createWishListItem.
  saveToWishListButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".categoryCard");
      if (product) {
        const productId = product.getAttribute("data-id");
        if (!isItemInWishList(productId)) {
          createWishListItem(product);
        }
      }
    });
  });

  // Calls checkWishList initially to update the display of the empty message based on whether there are already items in the wish list when the page loads.
  checkWishList();
});
=======

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
>>>>>>> Stashed changes
