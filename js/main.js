AOS.init({
    duration: 900, //длительность работает900
    mirror: true,
    disable: 'phone',
    disable: 'tablet',
    disable: 'mobile',
})

$(window).on("scroll", function (e) {
    var s = $("header"),
        a = 0;
    (a = window.innerWidth < 992 ? 30 : 100), window.scrollY > a ? (s.addClass("active"), AOS.refresh({ duration: 800, easing: "cubic-bezier(.4, .8, .74, 1)", once: !0 })) : s.removeClass("active");
    var t = (-10 * window.scrollY) / 100;
    $(".about__images, .intro__images, .services__images, .swiper-casey__images, .partners__images, .slider-reviews__images").attr("style", "transform: translate3d(0px, " + t + "px, 0px)");
    // для скролла в верх вниз декора
});

$('.language__link').on('click', function () {
    $('.language__link').toggleClass('language__link--active');
    // мигалка языков
});

document.querySelectorAll('.language__link').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item;
        if (parent.classList.contains('language__link--active')) {
            parent.classList.toggle('language__link--active');
        }
        else {
            parent.classList.toggle('language__link--active');
        }
    })
)

$('.header__btn, .menu__link').on('click', function () {
    $('.menu__inner, .header__btn').toggleClass('active');
    // для меню закрытия +
    // для открытия
    // для появления крестика  +
});

const slidercasey = new Swiper('.slidercasey', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        870: {
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

const sliderclients = new Swiper('.sliderclients', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const sliderreviews = new Swiper('.sliderreviews', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 1,
    spaceBetween: 30,
    // loop: true,
    // loopedSlides: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        870: {
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
    $('.accordion > li >.accordion__text').hide();
    $('.accordion > li').click(function () {
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

$(document).ready(function () {
    $('.faq__accordion > li >.faq__text').hide();

    $('.faq__accordion > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".faq__text").slideUp();
        } else {
            $(".faq__accordion > li  .active .faq__text").slideUp();
            $(".faq__accordion > li  .active").removeClass("active");
            $(this).addClass("active").find(".faq__text").slideDown();
        }
        return false;
    });
});

const modalWindow = document.querySelector('.modal');
let elements = document.querySelectorAll('.modal-window');

for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
    elements[i].addEventListener('click', function () {  /*при клике на элемент */

        if (modalWindow.classList.contains('modal-open')) {
            modalWindow.classList.remove('modal-open');
        } else {
            modalWindow.classList.add('modal-open');
        }
        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                modalWindow.classList.remove('modal-open');
            }
        }
    })
}
// close modal
$('.modal').click(function () {
    var select = $('.modal__inner');
    if ($(event.target).closest(select).length)
        return;
    $('.modal').toggleClass('modal-open');
    $(document).unbind('click');
    event.stopPropagation();
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
    tops = top - 50;
    $('body,html').animate({ scrollTop: tops }, 1500);
});