AOS.init({
    // delay: 100, // values from 0 to 3000, with step 50ms
    duration: 900, //длительность
    // once: false, // whether animation should happen only once - while scrolling down
    mirror: true,
    once: true,
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile',
    // easing: "cubic-bezier(.4, .8, .74, 1)", once: !0
    // 'tablet', 'mobile',
})

$(window).on("scroll", function (e) {
    var s = $("header"),
        a = 0;
    (a = window.innerWidth < 992 ? 30 : 100), window.scrollY > a ? (s.addClass("active"), AOS.refresh({ duration: 800, easing: "cubic-bezier(.4, .8, .74, 1)", once: !0 })) : s.removeClass("active");
    var t = (-10 * window.scrollY) / 100;
    $(".about__images, .intro__images, .services__images, .swiper-casey__images, .partners__images, .slider-reviews__images").attr("style", "transform: translate3d(0px, " + t + "px, 0px)");
});

$('.header__btn').on('click', function () {
    $('.menu__items').toggleClass('active');
});



$('.language').on('click', function () {
    $('.language').toggleClass('language--active');
});

$('.language__link').on('click', function () {
    $('.language__link').toggleClass('language__link--active');
});


// let link = document.querySelector('.menu__link');
// document.querySelectorAll('.header__link').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parent = item;
//         if (parent.classList.contains('active')) {
//             parent.classList.remove('active');
//             parent.classList.add('close');
//         }
//         else {
//             parent.classList.add('active');
//             parent.classList.remove('close');
//         }
//     })
// )

$('.header__btn').on('click', function () {
    $('.header__btn').add('active');
});

// -------!!!
$('.menu__link').on('click', function () {
    $('.header__btn').toggleClass('active');
    // if (parent.classList.contains('active')) {
    //     parent.classList.remove('active');
    //     parent.classList.add('close');
    // }
    // else {
    //     parent.classList.add('active');
    //     parent.classList.remove('close');
    // }
    // для крестика и для меню и что бы закрывалось меню после выбора сcылки
});

// let link = document.querySelector('.menu__link');
document.querySelectorAll('.header__btn').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            // parent.classList.add('close');
        }
        else {
            parent.classList.add('active');
            // parent.classList.remove('close');
        }
    })
)
let items = document.querySelector('.menu__items')
document.querySelectorAll('.menu a').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = items;
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            parent.classList.add('close');
        }
        else {
            parent.classList.add('active');
            parent.classList.remove('close');
        }
    })
)

// let items = document.querySelector('.menu__items')
// document.querySelectorAll('.menu a').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parent = items;
//         if (parent.classList.contains('active')) {
//             parent.classList.remove('active');
//             parent.classList.add('close');
//         }
//         else {
//             parent.classList.add('active');
//             parent.classList.remove('close');
//         }
//     })
// )

let item = document.querySelector('.language__link');

document.querySelectorAll('.language__link').forEach((item) =>

    item.addEventListener('click', () => {
        const parent = item;

        if (parent.classList.contains('language__link--active')) {
            parent.classList.toggle('language__link--active');
        }
        else {
            parent.classList.toggle('language__link--active');
            parent.classList.remove('accordion__wrapper--active');
        }
    })
)

const swipercasey = new Swiper('.swipercasey', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 1,
    spaceBetween: 30,
    /*растояние*/
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        785: {
            slidesPerView: 3,
        },

        615: {
            slidesPerView: 2,
        },

        319: {
            slidesPerView: 1,
        },
    },
});

const swiperclients = new Swiper('.swiperclients', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const sliderreviews = new Swiper('.sliderreviews', {
    slidesPerView: 3,
    loopedslides: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        785: {
            slidesPerView: 3,
        },

        615: {
            slidesPerView: 2,
        },

        319: {
            slidesPerView: 1,
        },
    },
});

$(document).ready(function () {
    $('.accordion > li  >.accordion__text').hide();

    $('.accordion > li ').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".accordion__text").slideUp();
        } else {
            $(".accordion > li  .active .accordion__text").slideUp();
            $(".accordion > li  .active").removeClass("active");
            $(this).addClass("active").find(".accordion__text").slideDown();
        }
        return false;
    });
});


// open modal
// $(' .price__link--scout').click(function () {
//     $('.modal--scout').show();
//     $('.modal__inner').css('display', 'inline-block');
// });
// $('.price__link--leader').click(function () {
//     $('.modal--leader').show();
//     $('.modal__inner').css('display', 'inline-block');
// });
// $('.price__link--operator').click(function () {
//     $('.modal--operator').show();
//     $('.modal__inner').css('display', 'inline-block');
// });



// $('').on('click', function () {
//     $('.modal').toggleClass('modal-active');

//     /*$('.header__logo').toggleClass('menu__list--active');
//     $('.intro__btn').toggleClass('menu__list--active');*/
// });

// close modal
$('.modal').click(function () {
    // $(document).on('click', function (event) {
    var select = $('.modal__inner');
    if ($(event.target).closest(select).length)
        return;
    $('.modal').toggleClass('modal-active');
    $(document).unbind('click');
    event.stopPropagation();
    // });
});
// ---------------------------------------------
// скрипт который убирает полосу при скроле
$(function () {
    let header = $('.header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });
});
// ---------------------------------------------
// для плавного скрола
$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    tops = top - 100;
    // px = px;
    // + 'px'
    // console.log(top);
    // console.log(tops);
    $('body,html').animate({ scrollTop: tops }, 1500);
});
