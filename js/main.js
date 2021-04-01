$(document).ready(function() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

    });


    //open mobile-menu  
    var menuButton = $(".menu-button");
    var closeMobileButton = $(".mobile__close");
    menuButton.on("click", openMenu);
    closeMobileButton.on("click", closeMobileMenu);

    function openMenu() {
        $(".mobile").toggleClass('mobile--visible');
        $("body").toggleClass("hidden");
    }

    function closeMobileMenu(event) {
        event.preventDefault();
        $(".mobile").removeClass('mobile--visible');
        $("body").toggleClass("hidden");

    };

    $(document).on('keydown', function(d) {
        if (d.keyCode === 27) {
            var mobileMenu = $(".mobile");
            mobileMenu.removeClass("mobile--visible");
            $("body").toggleClass("hidden");
        }
    });

    //TABS

    $(function() {
        var tab = $('#tabs .tabs-items > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('#tabs .tabs-nav a').click(function() {
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabs .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        // Клики по якорным ссылкам.
        $('.tabs-target').click(function() {
            $('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
        });
    });


});