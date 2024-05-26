document.addEventListener("DOMContentLoaded", function () {
  const wishListIcon = document.querySelector(".wishListIcon img");
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
