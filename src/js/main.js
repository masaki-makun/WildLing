import { info } from "autoprefixer";
import "../css/style.css";

// Swiper
const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  speed: 1000,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: true,
  //   },
  stopOnLastSlide: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    850: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

// Nav表示処理
const navActive = () => {
  const menuBtn = document.querySelector(".js-menuBtn");
  const closeBtn = document.querySelector(".js-closeBtn");
  const navSp = document.querySelector(".nav-sp");
  const overlay = document.querySelector(".js-overlay");
  menuBtn.addEventListener("click", () => {
    closeBtn.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    navSp.classList.add("right-0");
    navSp.classList.add("opacity-100");
    navSp.classList.add("w-1/2");
    navSp.classList.add("translate-x-0");
    navSp.classList.remove("-right-full");
    navSp.classList.remove("translate-x-full");
    navSp.classList.remove("w-0");
    overlay.classList.remove("w-0");
    overlay.classList.remove("translate-x-full");
    overlay.classList.add("w-full");
    overlay.classList.add("translate-x-0");
  });
  console.log("run navActive");
};

// Nav非表示処理
const navNonActive = () => {
  const overlay = document.querySelector(".js-overlay");
  const menuBtn = document.querySelector(".js-menuBtn");
  const closeBtn = document.querySelector(".js-closeBtn");
  const navSp = document.querySelector(".nav-sp");
  overlay.addEventListener("click", () => {
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    overlay.classList.remove("w-full");
    overlay.classList.remove("translate-x-0");
    overlay.classList.add("w-0");
    overlay.classList.add("translate-x-full");
    navSp.classList.add("-right-full");
    navSp.classList.add("translate-x-full");
    navSp.classList.add("w-0");
    navSp.classList.remove("right-0");
    navSp.classList.remove("opacity-100");
    navSp.classList.remove("translate-x-0");
    navSp.classList.remove("w-1/2");
  });
  closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    overlay.classList.remove("w-full");
    overlay.classList.remove("translate-x-0");
    overlay.classList.add("w-0");
    overlay.classList.add("translate-x-full");
    navSp.classList.add("-right-full");
    navSp.classList.add("w-0");
    navSp.classList.add("translate-x-full");
    navSp.classList.remove("right-0");
    navSp.classList.remove("opacity-100");
    navSp.classList.remove("w-1/2");
    navSp.classList.remove("translate-x-0");
  });
  console.log("run navNonActive");
};

//スクロール処理
const scroll = () => {
  const navLinks = document.querySelectorAll(".nav-sp-list--link");
  const navSp = document.querySelector(".nav-sp");
  const overlay = document.querySelector(".js-overlay");
  const closeBtn = document.querySelector(".js-closeBtn");
  const menuBtn = document.querySelector(".js-menuBtn");
  // リンククリックでnav,overlay非表示
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      overlay.classList.remove("w-full");
      overlay.classList.remove("translate-x-0");
      overlay.classList.add("w-0");
      overlay.classList.add("translate-x-full");
      navSp.classList.add("-right-full");
      navSp.classList.add("translate-x-full");
      navSp.classList.add("w-0");
      navSp.classList.remove("right-0");
      navSp.classList.remove("opacity-100");
      navSp.classList.remove("translate-x-full");
      navSp.classList.remove("w-1/2");
      closeBtn.classList.add("hidden");
      menuBtn.classList.remove("hidden");
    });
  });
};

document.addEventListener(
  "DOMContentLoaded",
  navActive(),
  navNonActive(),
  scroll()
);
