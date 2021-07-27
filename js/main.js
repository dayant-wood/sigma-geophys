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

    pagination: {
      el: ".swiper-pagination",
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
    // $("body").toggleClass("hidden");
  }

  function closeMobileMenu(event) {
    event.preventDefault();
    $(".mobile").removeClass("mobile--visible");
  }

  //preventDefault for geography
  const linkItem = document.querySelectorAll(".geography__map-link");

  linkItem.forEach(function (links) {
    links.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  //form processing
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите ваше имя",
          minlength: "Имя должно содержать минимум 3 символа",
        },
        email: {
          required: "Пожалуйста, укажите ваш e-mail ",
          email: "Формат e-mail адреса должен быть name@domain.com",
        },
      },
    });
  });

  //   // // //zoom technlogies photos
  //   const techImages = document.querySelectorAll(".technologies__image-field");
  //   console.log(techImages);

  //   techImages.addEventListener("click", function () {
  //     techImages.forEach(function (images) {
  //       images.style.height = "500px";
  //     });
  //   });
});
