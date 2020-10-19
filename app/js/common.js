$('.btn-burger').click(function () {
   $('.menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.menu').fadeOut();
});

$(document).ready(function () { //плавный скролл
    $(".go_to").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top - 100}, 500);
    });
});

$('[name="phone"]').mask("+7 (999) 999-99-99");

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");

        $('.modal__div').css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        });

        $('#thanks__modal').css('display', 'flex')
            .animate({
                opacity: 1,
                top: '50%'
            }, 200);

        $(".form").trigger("reset");
    });
    return false;
});

$('.production__slider').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.slider-nav',
    asNavFor: '.slider-gallery-min',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.slider-gallery-min').slick({
    slidesToShow: 2,
    arrows: false
});