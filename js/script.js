$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/Left.png"" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/Right.png"" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});