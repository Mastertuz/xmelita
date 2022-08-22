var line = document.getElementById("line");
var line1 = document.getElementById("a");
var line2 = document.getElementById("b");
var line3 = document.getElementById("c");

line.addEventListener('click', function () {
    line1.classList.toggle('a');
    line2.classList.toggle('c');
    line3.classList.toggle('b');
});

$(".menu__btn").on('click', function () {
    $(".menu").toggleClass("active");
})




$(function () {
    $(".slider").slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: '40px',
                }
              }
            ]
    });
});