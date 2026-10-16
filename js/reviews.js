$(document).ready(function(){

    $('.game-slider').slick({

        arrows: true,

        autoplay: true,
        autoplaySpeed: 2500,

        infinite: true,
        speed: 500,

        prevArrow:
        `<button class="arrow slick-prev">
            <img src="/img/slider/btn.png"
                 style="transform: scaleX(-1);"
                 alt="">
        </button>`,

        nextArrow:
        `<button class="arrow slick-next">
            <img src="/img/slider/btn.png" alt="">
        </button>`

    });

});