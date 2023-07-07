AOS.init({
    // delay: 100, // values from 0 to 3000, with step 50ms
    duration: 900, //длительность работает900
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

$('.language__link').on('click', function () {
    $('.language__link').toggleClass('language__link--active');
    // мигалка языков
    console.log(1);
});

document.querySelectorAll('.language__link').forEach((item) =>

    item.addEventListener('click', () => {
        console.log(2);
        const parent = item;
        if (parent.classList.contains('language__link--active')) {
            parent.classList.toggle('language__link--active');
        }
        else {
            parent.classList.toggle('language__link--active');
            // parent.classList.remove('language__link--active');
            // parent.classList.remove('accordion__wrapper--active');


        }
    })
)
// -----------------
// рез копия
// $('.language__link').on('click', function () {
//     $('.language__link').toggleClass('language__link--active');
//     // мигалка языков
// });

// document.querySelectorAll('.language__link').forEach((item) =>

//     item.addEventListener('click', () => {
//         const parent = item;
//         if (parent.classList.contains('language__link--active')) {
//             parent.classList.toggle('language__link--active');
//         }
//         else {
//             parent.classList.toggle('language__link--active');
//             // parent.classList.remove('language__link--active');
//             // parent.classList.remove('accordion__wrapper--active');


//         }
//     })
// )
// -----------------
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

// $(document).ready(function () {
//     $('.accordion > li  >.accordion__text').hide();

//     $('.accordion > li ').click(function () {
//         if ($(this).hasClass("active")) {
//             $(this).removeClass("active").find(".accordion__text").slideUp();
//         } else {
//             $(".accordion > li  .active .accordion__text").slideUp();
//             $(".accordion > li  .active").removeClass("active");
//             $(this).addClass("active").find(".accordion__text").slideDown();

//         }
//         return false;
//     });
// });

// $(document).ready(function () {
//     $('.accordion > li > .accordion__text').hide();

//     $('.accordion > li').click(function () {
//         if ($(this).hasClass("active")) {
//             $(this).removeClass("active").find(".accordion__text").slideUp();
//         } else {
//             $(".accordion > li.active .accordion__text").slideUp();
//             $(".accordion > li.active").removeClass("active");
//             $(this).addClass("active").find(".accordion__text").slideDown();
//         }
//         return false;
//     });
// });

// $(document).ready(function () {
//     $('.faq__accordion > li > .faq__text').hide();

//     $('.faq__accordion > li').click(function () {
//         if ($(this).hasClass("active")) {
//             $(this).removeClass("active").find(".faq__text").slideUp();
//         } else {
//             $(".faq__accordion > li.active .faq__text").slideUp();
//             $(".faq__accordion > li.active").removeClass("active");
//             $(this).addClass("active").find(".faq__text").slideDown();
//         }
//         return false;
//     });
// });

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



// $(document).ready(function () {
//     $('.faq__accordion > li  >.faq__text').hide();//прячет текст

//     $('.faq__accordion > li ').click(function () {//при клике на
//         // $('.faq__wrapper').toggleClass('active');
//         if ($(this).hasClass("active")) {//если есть класс то
//             $(this).removeClass("active").find(".faq__text").slideUp(); //удаляет класс актив находит класс текст делает слайд
//             // $(this).add("close");

//         } else {
//             $(".faq__accordion > li  .active .faq__text").slideUp();
//             //!!! $(".faq__accordion > li  .active").removeClass("active");
//             // $(".faq__accordion > li  .close").removeClass("active");
//             $(this).addClass("active").find(".faq__text").slideDown();
//             // $(this).remove("close");
//             // $('.faq__box').add('active');
//         }
//         return false;
//     });
// });



// $('.faq__item').on('click', function () {
//     $('.faq__btn').toggleClass('active');
//     // для открытия
// });
// $('.faq__item').on('click', function () {
//     $('.faq__btn').add('active');
//     // для открытия
// });
// $('.faq__inner, .faq__text p').on('click', function () {
//     $(this).next().slideToggle();
//     // $('.questions__btn').add('active');
//     // $(this).toggleClass('questions__text--active');
//     // $(this)('.faq__text').slideToggle('faq__text--active');
// });

// $(document).ready(function () {
//     $('.faq__accordion > li  >.faq__text').hide();//прячет текст
// });

// let item = document.querySelector('.faq__item');
// // let text = document.querySelector('.faq__text');
// let box = document.querySelector('.faq__btn');
// // // text.classList.hide();
// item.addEventListener('click', () => {
//     // text.classList.add('faq__text--active');

//     if (box.classList.contains('active')) {
//         box.classList.remove('active');

//     }
//     else {
//         let elements = document.getElementsByClassName("accordion__btn");
//         // for (let i = 0; i < elements.length; i++) {
//         //     // elements[i].addEventListener('click', function () {

//         //         for (let i = 0; i < elements.length; i++) {
//         //             // elements[i].classList.add('active');
//         //             box.classList.add('active');
//         //         }

//         //     // })
//         // }
//     }

// let elements = document.getElementsByClassName("faq__btn");
// for (let i = 0; i < elements.length; i++) {
//     box.classList.add('active');
//     elements[i].addEventListener('click', function () {
//         for (let i = 0; i < elements.length; i++) {
//             // elements[i].classList.remove('active');
//             box.classList.add('active');
//         }
//         // this.classList.add('active');
//     })
// }
// $('.faq__wrapper').toggleClass('active');
// if (box.classList.contains('active')) {
//     box.classList.remove('active');
//     // box.classList.add('close');
// }
// else {
//     box.classList.add('active');
//     // box.classList.remove('close');
// }
// });


// $(document).ready(function () {
//     $('.accordion-list > li > .answer').hide();

//     $('.accordion-list > li').click(function () {
//         if ($(this).hasClass("active")) {
//             $(this).removeClass("active").find(".answer").slideUp();
//         } else {
//             $(".accordion-list > li.active .answer").slideUp();
//             $(".accordion-list > li.active").removeClass("active");
//             $(this).addClass("active").find(".answer").slideDown();
//         }
//         return false;
//     });
// });

// $('.faq__item').on('click', function () {
//     $(this).next().toggleClass('faq__text--active');
// });

// $('.faq__box').on('click', function () {
//     $(this).next().slideToggle();
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.faq__text').slideToggle('faq__text--active');
// });

// $('.faq__btn').on('click', function () {
//     $('.faq__btn').toggleClass('active');
// });


// $('.faq__inner').on('click', function () {
//     $(this).next().slideToggle();
//     // $('.questions__btn').add('active');
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.faq__text').slideToggle('faq__text--active');
// });

// $('.questions__item').on('click', function () {
//     $('.questions__btn').toggleClass('active');
// });
// -----------------------------
// $('.faq__inner, .faq__text p').on('click', function () {
//     $(this).next().slideToggle();
//     // $('.questions__btn').add('active');
//     // $(this).toggleClass('questions__text--active');
//     // $(this)('.faq__text').slideToggle('faq__text--active');
// });
// let item = document.querySelector('.faq__item');
// let btn = document.querySelector('.faq__btn');
// item.addEventListener('click', () => {
//     // btn.classList.add('active');
//     if (btn.classList.contains('active')) {
//         btn.classList.remove('active');
//         // btn.classList.add('close');
//     }
//     else {
//         btn.classList.add('active');
//         // btn.classList.remove('close');

//         // text.classList.toggle('active');
//         // parent.classList.toggleClass('accordion__wrapper--active');
//     }

// })

// / -----------------------------
// $('.questions__box').on('click', function () {
//     $('.questions__btn').add('active');
// });
// -------------------------------------------------------
// $('.accordion__wrapper').on('click', function () {
//     $(this).next().toggleClass('accordion__text--active');
// });

// $(document).ready(function () {
//     $(".accordion__wrapper").click(function () {
//         $(this).toggleClass("accordion__wrapper--active");
//     });
// });
// выключил
// -------------------------------------------------------


// $('.faq__item').on('click', function () {
//     $('.faq__box').add('active');
//     // для открытия
// });
// let text = document.querySelector('.faq__text');
// let items = document.querySelectorAll('.faq__item').forEach((item) =>

//     item.addEventListener('click', () => {
//         const parent = item;
//         // const parent = item.parentNode;

//         if (text.classList.contains('active')) {
//             text.classList.remove('active');
//             text.classList.add('close');
//         }
//         else {
//             text.classList.add('active');
//             text.classList.remove('close');

//             // text.classList.toggle('active');
//             // parent.classList.toggleClass('accordion__wrapper--active');
//         }
//     })
// )

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

// $('.modal-window').on('click', function () {
//     $('.modal').toggle('modal-open');
//     // для появления крестика  +
// });

// close modal
$('.modal').click(function () {
    // $(document).on('click', function (event) {
    var select = $('.modal__inner');
    if ($(event.target).closest(select).length)
        return;
    $('.modal').toggleClass('modal-open');
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

