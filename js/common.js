$(document).ready(function() {

    $(".menu-btn").on("click", function() {
        $("nav").addClass("mob-menu-active");
    });

    $(".close").on("click", function() {
        $("nav").removeClass("mob-menu-active");
    });

    $(".form-fedback").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function(success) {
                $('.popup-with-form').click();
                console.log(success);
            },
            error: function(error) {
                $('.popup-with-form').click();
                console.log(error);
            }
        });
        return false;
    });

    function f_acc(){
        $(".acc-head").children(".plus").removeClass("minus");
        $('.accordeon .acc-body').not($(this).next()).slideUp(200).parent(".acc-box").removeClass("acc-active");
        $(this).next().slideToggle(200).parent(".acc-box").addClass("acc-active");
        $(this).children(".plus").addClass("minus");
    }

    $('.accordeon .acc-head').on('click', f_acc);

    $('.slider-project').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

});