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

  //preventDefault for geography
  const linkItem = document.querySelectorAll(".geography__map-link");
  for (const links of linkItem) {
    links.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});
