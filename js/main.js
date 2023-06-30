


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
    // активация библиотеки AOS
})

$(window).on("scroll", function (e) {
    var s = $("header"),
        a = 0;
    (a = window.innerWidth < 992 ? 30 : 100), window.scrollY > a ? (s.addClass("active"), AOS.refresh({ duration: 800, easing: "cubic-bezier(.4, .8, .74, 1)", once: !0 })) : s.removeClass("active");
    var t = (-10 * window.scrollY) / 100;
    $(".about__images, .intro__images, .services__images, .swiper-casey__images, .partners__images, .slider-reviews__images").attr("style", "transform: translate3d(0px, " + t + "px, 0px)");
    // для скролла в верх вниз декора
});

// $('.language').on('click', function () {
//     $('.language').toggleClass('language--active');
//     // открывать все языки
// });

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
            parent.classList.remove('accordion__wrapper--active');
        }
    })
)

// let items = document.querySelector('.language__link');

// // document.querySelectorAll('.language__link').forEach((item) =>

// items.addEventListener('click', () => {
//     // const parent = item;
//     // items.classList.toggle('language__link--active');
//     if (items.classList.contains('language__link--active')) {
//         items.classList.toggle('language__link--active');
//     }
//     else {
//         items.classList.toggle('language__link--active');
//         items.classList.remove('accordion__wrapper--active');
//     }
// })
// // )
// let items = document.querySelector('.language__link');
// $('.language__link').on('click', function () {
//     $('.language__link').toggleClass('language__link--active');
//     // мигалка языков
// });





$('.header__btn, .menu__link').on('click', function () {
    $('.menu__inner').toggleClass('active');
    // для меню закрытия +
});

$('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('active');
    // для открытия
});

$('.menu__link').on('click', function () {
    $('.header__btn').toggleClass('active');
    // для появления крестика  +
});



const slidercasey = new Swiper('.swipercasey', {
    slidesPerView: 3,
    loop: true,
    loopedslides: 1,
    spaceBetween: 30,
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

$(document).ready(function () {
    $('.faq__accordion > li  >.faq__text').hide();

    $('.faq__accordion > li ').click(function () {
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




// $('.header__button').on('click', function () {
//     $('.modal').add('modal-active');
//     // для открытия модального окона
// });
// $('.menu__button').on('click', function () {
//     $('.modal').add('modal-active');
//     // для открытия модального окона
// });
// let button = document.querySelector('.menu__button, .header__button, .about__btn');
// let modal = document.querySelector('.modal');
// button.addEventListener('click', () => {
//     modal.classList.add('modal-active');
// });

// $(' .header__button').click(function () {
//     $('.modal').css('display', 'flex');
//     $('.modal__inner').css('display', 'inline');
// });

// const buttonModal = document.querySelector('.header__button, .about__btn');
// buttonModal.addEventListener('click', () => {
//     modalWindow.classList.add('modal-active'); /*добовляем класс*/
//     document.onkeydown = function (event) {
//         if (event.keyCode == 27) {
//             modalWindow.classList.remove('modal-active');
//         }
//     }
// });
// -----------------------
// let data = this.getAttribute('data');
const modalWindow = document.querySelector('.modal');
let elements = this.getAttribute("modal");
for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
    elements[i].addEventListener('click', function () {  /*при клике на элемент */
        modalWindow.classList.add('modal-active');
        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                modalWindow.classList.remove('modal-active');
            }
        }
    })
}


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
    // tops = top - 100;
    tops = top - 50;
    $('body,html').animate({ scrollTop: tops }, 1500);

});

// $('.menu__link').on('click', function () {
//     $('.header__inner').toggleClass('active');
// });

// для меню что бы закрывалось, что была анимация закрытия
// const items = document.querySelector('.menu__inner')
// const link = document.querySelector('.language__link');
// const btn = document.querySelector('.header__btn')
// document.querySelectorAll('.menu a').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parent = items;
//         // link.classList.toggle('language__link--active');
//         // btn.classList.toggle('active');

//         if (parent.classList.contains('active')) {
//             parent.classList.remove('active');
//             parent.classList.add('close');
//             // btn.classList.add('active');
//         }
//         else {
//             parent.classList.add('active');
//             parent.classList.remove('close');
//             // btn.classList.remove('active');
//         }
//     })
// )



// document.querySelectorAll('.language__link').forEach(() =>

// item.addEventListener('click', () => {
//     // const parent = item;

//     if (item.classList.contains('language__link--active')) {
//         item.classList.toggle('language__link--active');
//     }
//     else {
//         item.classList.toggle('language__link--active');
//         // item.classList.remove('accordion__wrapper--active');
//     }
// })
// )

// $('.language').on('click', function () {
//     $('.language').toggleClass('language--active');
// })


// -------!!!


// let link = document.querySelector('.menu__link');
// document.querySelectorAll('.header__btn').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parent = item;

//         btn.classList.toggle('active');
//         // if (parent.classList.contains('active')) {
//         //     parent.classList.remove('active');
//         //     // parent.classList.add('close');
//         // }
//         // else {
//         //     parent.classList.add('active');
//         //     // parent.classList.remove('close');
//         // }
//     })
// )