// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// function isInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function addClassOnScroll() {
//   var items = document.querySelectorAll('.things__item');
//   items.forEach(function (item) {
//     if (isInViewport(item)) {
//       item.classList.add('things__item--show');
//     } else {
//       item.classList.remove('things__item--show');
//     }
//   });
// }

// window.addEventListener('scroll', addClassOnScroll);
