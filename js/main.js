$(document).ready(function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });

  //open mobile-menu
  var menuButton = $(".menu-button");
  var closeMobileButton = $(".mobile__close");
  menuButton.on("click", openMenu);
  closeMobileButton.on("click", closeMobileMenu);

  function openMenu() {
    $(".mobile").toggleClass("mobile--visible");
    $("body").toggleClass("hidden");
  }

  function closeMobileMenu(event) {
    event.preventDefault();
    $(".mobile").removeClass("mobile--visible");
    $("body").toggleClass("hidden");
  }
  // $(document).on('keydown', function(e) {
  //     if (e.keyCode === 27) {
  //         let mobileMenu = $(".mobile");
  //         mobileMenu.removeClass("mobile--visible");
  //         $("body").toggleClass("hidden");
  //     }
  // });

  // const linkItem = $(".geography__map-link");
  // const dropdown = document.querySelector(".dropdown");
  // const linkClick = document.querySelector(".navbar__item--click");
  // const overlay = document.querySelector(".overlay");
  // const geographyTitle = document.querySelector(".geography__modal-title");
  // const geographyContainer = document.querySelector(
  //   ".geography__map-container"
  // );
  // const geographyModal = document.querySelector(".geography__map-modal");

  // geographyContainer.addEventListener("mouseenter", function () {
  //   // geographyModal.classList.add("geography__map-modal--open");
  //   linkItem.next().toggle().toggleClass("geography__map-modal--open");
  // });

  // geographyContainer.addEventListener("mouseleave", function () {
  //   linkItem.classList.remove("geography__map-modal--open");
  // });

  // //open dropdown
  // linkClick.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   dropdown.classList.toggle("show");
  //   document.querySelector("body").classList.toggle("hidden");
  //   overlay.classList.remove("hidden-1");
  // });

  // //close dropdown
  // overlay.addEventListener("click", function () {
  //   dropdown.classList.remove("show");
  //   overlay.classList.toggle("hidden-1");
  //   document.querySelector("body").classList.toggle("hidden");
  //   geographyTitle.classList.toggle("geography__map-modal--open");
  //   linkItem.next().toggle().toggleClass("geography__map-modal--open");
  // });

  // linkItem.on("click", function (event) {
  //   event.preventDefault();
  //   $(this).next().toggle().toggleClass("geography__map-modal--open");
  //   // overlay.classList.remove("hidden-1");
  // });

  // const time = 1000;
  // const step = 1;

  // function outNum(num, elem) {
  //     let e = document.querySelector("#out");
  //     n = 0;
  //     let t = Math.round(time / (num / step));
  //     let interval = setInterval(() => {
  //         n = n + step;
  //         if (n == num) {
  //             clearInterval(interval);
  //         }
  //         e.innerHTML = n;
  //     }, t);
  // }

  // outNum(1, "#out");
});
