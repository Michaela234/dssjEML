document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".categorySave");

  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

// add cart to wishlist
document.addEventListener("DOMContentLoaded", function () {
  function createWishListItem(product) {
    const wishListItem = product.cloneNode(true);
    const wishListContainer = document.querySelector(".wishList__card");
    wishListItem.classList.add("wishList__item");
    wishListContainer.appendChild(wishListItem);
  }

  // All save to wishlist buttons
  const saveToWishListButtons = document.querySelectorAll(".addToWishList");

  saveToWishListButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".categoryCard");
      if (product) {
        createWishListItem(product);
      }
    });
  });
});
