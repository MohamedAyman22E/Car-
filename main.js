let menu = document.querySelector(".menu");
let menuI = document.querySelector(".menu .ri-menu-line");
let navList = document.querySelector(".navListMenu");
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  if (menuI.classList.contains("ri-menu-line")) {
    menuI.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    menuI.classList.replace("ri-close-line", "ri-menu-line");
  }
});

var swiper = new Swiper(".mySwiper", {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
let mixer = mixitup(".allFeature", {
  selectors: {
    target: ".feature_card",
  },
  animation: {
    duration: 300,
  },
});

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", scrollY > 50);
});

let navLinkHeader = document.querySelectorAll(".navLinkHeader li");
navLinkHeader.forEach(index => {
  index.addEventListener("click", () => {
    navLinkHeader.forEach(removeIndex => {
      removeIndex.classList.remove("active_link");
    });
    index.classList.add("active_link");
  });
});
