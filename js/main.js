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
});

const swiperclients = new Swiper('.swiperclients', {
    slidesPerView: 1,
    loop: true,
    // loopedslides: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// --------------------------------------------
// $(document).ready(function () {
//     $(".accordion__item").on("click", function () {
//         if ($(this).hasClass('accordion__text--active')) {
//             $(this).removeClass("accordion__text--active");
//             // $(this).siblings('.content').slideUp(200);
//             // $(".set > a span").removeClass("minus").addClass("plus");
//         } else {
//             // $(".set > a span").removeClass("minus").addClass("plus");
//             // $(this).find("span").removeClass("plus").addClass("minus");
//             $(".accordion__text").removeClass("accordion__text--active");
//             $(this).addClass("accordion__text--active");
//             // $('.content').slideUp(200);
//             // $(this).siblings('.content').slideDown(200);
//         }
//     });
// });
// --------------------------------------------
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
    // accordion__subtitle
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


// --------------------------------------------
// let text = document.querySelector('.accordion__text');
// document.querySelectorAll('.accordion__item').forEach((item) =>
//     // ite.addEventListener('click', () => {


//     item.addEventListener('click', () => {
//         const parent = item;
//         // const parent = item.parentNode;

//         if (text.classList.contains('accordion__text--active')) {
//             // parent.classList.remove('accordion__text--active');
//             text.classList.remove('accordion__text--active');
//         }
//         else {
//             // document
//             //     .querySelectorAll('.accordion__wrapper')
//             //     .forEach((child) => child.classList.remove('accordion__wrapper--active'))
//             text.classList.toggle('accordion__text--active');
//             // parent.classList.toggle('accordion__text--active');
//             // parent.classList.toggleClass('accordion__wrapper--active');
//         }
//     })
// )
// })
// --------------------------------------------

// $('.accordion__item').on('click', function () {
//     $('.accordion__text').toggleClass('accordion__text--active');

//     /*$('.header__logo').toggleClass('menu__list--active');
//     $('.intro__btn').toggleClass('menu__list--active');*/
// });

// $('.accordion__item').on('click', function (e) {
//     e.preventDefault();
//     $(this).next('.accordion__text').toggleClass('accordion__text--active');
//     // $(this).addClass('active');

//     // $('.rates__list').removeClass('product-tabs__text--active');
//     // $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
// });

// $('.accordion__item').on('click', function () {
//     $(this).next().toggleClass('accordion__text--active');
// });

// $('.accordion__wrapper').on('click', function () {
//     $(this).next().toggleClass('accordion__text--active');
// });

// $(document).ready(function () {
//     $(".accordion__item").click(function () {
//         $(this).toggleClass("accordion__text--active");
//     });
// });
// $('.accordion__item').on('click', function () {
//     $(this).next().toggleClass('accordion__text--active');
// });
// --------------------------------------------------------------------------------
// 1 не закрывается при клике на текст
// $('.accordion__box').on('click', function () {
//     $(this).next().toggleClass('accordion__text--active');
// });
// $('.accordion__box').on('click', function () {
//     // $(this).next().toggleClass('accordion__text--active');
//     $(this).next().toggleClass('accordion__text--active');
//     // $(this).next('.accordion__text').remove('accordion__text--active');
// });

// $('.accordion__text').on('click', function () {
//     // $(this).next().toggleClass('accordion__text--active');
//     // $(this).next().toggleClass('accordion__text--active');
//     $(this).next('.accordion__text').remove('accordion__text--active');

// });



// $('.accordion__item').click(function (e) {
//     var className = e.target.className;
//     $('.accordion__text' + className).toggleClass('accordion__text--active');
// });
// --------------------------------------------------------------------------------
// 10
// let buttonModal4 = document.querySelector('.accordion__item');
// let buttonModal = document.querySelector('.accordion__text');
// // buttonModal4.addEventListener('click', () => {
// // const elements = buttonModal.parentNode;
// console.log('1');


// // buttonModal4.addEventListener('click', () => {
// // buttonModal.classList.add('accordion__text--active');
// itn()
// function itn(params) {

//     if (buttonModal.classList.contains('accordion__text--active')) {
//         buttonModal.classList.remove('accordion__text--active');
//         console.log('3');
//         // let elements = document.getElementsByClassName("accordion__text");
//         // for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         //     // elements[i].addEventListener('click', function () {  //при клике на элемент
//         //     for (let i = 0; i < elements.length; i++) {
//         //         elements[i].classList.remove('accordion__text--active'); /*удаляем у всех class active*/
//         //     }
//         //     // buttonModal.classList.add('accordion__text--active');/*добавляем class active по которому кликнули */
//         //     // })
//         // }
//     }
//     else {
//         console.log('2');
//         // buttonModal.classList.add('accordion__text--active');
//         let elements = document.getElementsByClassName("accordion__text");
//         // buttonModal4.addEventListener('click', () => {
//         console.log('4');
//         buttonModal4.addEventListener('click', () => {
//             for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//                 // elements[i].addEventListener('click', function () {  //при клике на элемент

//                 for (let i = 0; i < elements.length; i++) {
//                     elements[i].classList.add('accordion__text--active'); /*удаляем у всех class active*/
//                 }

//                 // buttonModal.classList.add('accordion__text--active');/*добавляем class active по которому кликнули */
//                 // })
//             }
//         });
//         // });
//     }
// }
// --------------------------
// });
// --------------------------

// buttonModal.classList.add('accordion__text--active');
// if (elements.classList.contains('accordion__text--active')) {
//     console.log('2');
//     // buttonModal.classList.remove('accordion__text--active');
//     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         elements[i].addEventListener('click', function () {  /*при клике на элемент
//  */ console.log('3');
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.remove('accordion__text--active'); /*удаляем у всех class active*/
//                 console.log('4');
//             }
//             this.classList.add('accordion__text--active');/*добавляем class active по которому кликнули */
//             console.log('5');
//         })
//     }
// }
// else {
// console.log('6');
// document
//     .querySelectorAll('.accordion__text')
//     .forEach((child) => child.classList.add('accordion__text--active'))
// console.log('7');
// elements[i].addEventListener('click', function () {
//     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         /*при клике на элемент */
//         console.log('8');
//         for (let i = 0; i < elements.length; i++) {
//             buttonModal4[i].classList.add('accordion__text--active'); /*удаляем у всех class active*/
//         }
//         console.log('9');
//         this.classList.remove('accordion__text--active');/*добавляем class active по которому кликнули */
//         console.log('10');

//         // parent.classList.toggleClass('accordion__wrapper--active');
//     }
// })
// }

// });
// -------------------------------------------------------------------------------
// 3 версия
// let buttonModal4 = document.querySelector('.accordion__item');
// let buttonModal = document.querySelector('.accordion__text');
// buttonModal4.addEventListener('click', () => {

//     buttonModal.classList.add('about__item--active');
// });
// -------------------------------------------
// не работает
// let buttonModal4 = document.querySelector('.accordion__item');
// let buttonModal = document.querySelector('.accordion__text');
// buttonModal4.addEventListener('click', () => {
//     buttonModal.classList.remove('about__text--active');
// });

// buttonModal.addEventListener('click', () => {
//     buttonModal.classList.remove('about__text--active');
// });
// ---------------------------------------------------------------------------------
// ite.forEach(function callback(currentValue, index, array) {
//     //your iterator
// });
// text.forEach(function callback(currentValue, index, array) {
//     //your iterator
// });
// let ite = document.querySelector('.accordion__item')
// let text = document.querySelector('.accordion__text');

// ite.addEventListener('click', () => {
//     // document.querySelectorAll('.accordion__text').forEach((item) =>

//     let elements = document.getElementsByClassName("accordion__item");
//     for (let i = 0; i < elements.length; i++) {
//         /*прокручиваем в цикле все элементы*/
//         // elements[i].addEventListener('click', function () {
//         /*при клике на элемент
//          */
//         for (let i = 0; i < elements.length; i++) {
//             // let elements = document.getElementsByClassName("accordion__item");
//             text.classList.add('accordion__text--active');
//         }
//         // ite.addEventListener('click', () => {
//         // text.classList.add('accordion__text--active')
//         // }));
//         // )
//     }
// }
// )


// ---------------------------------------------------------------------------------
// document.querySelectorAll('.accordion__item').forEach((item) =>


//     item.addEventListener('click', () => {
//         const but = document.querySelector('.accordion__text');
//         const parent = but;
//         // const parent = item.parentNode;

//         if (parent.classList.contains('accordion__text--active')) {
//             parent.classList.remove('accordion__text--active');
//             console.log('1');
//         } else {
//             // document
//             //     .querySelectorAll('.accordion__item')
//             //     .forEach((child) => child.classList.remove('accordion__text--active'))
//             // console.log('2');

//             let elements = document.getElementsByClassName("accordion__item");
//             for (let i = 0; i < elements.length; i++) {
//                 /*прокручиваем в цикле все элементы*/
//                 // elements[i].addEventListener('click', function () {
//                 /*при клике на элемент
//                  */
//                 for (let i = 0; i < elements.length; i++) {
//                     // let elements = document.getElementsByClassName("accordion__item");
//                     elements.classList.toggle('accordion__text--active');
//                 }
//                 // this.classList.add('active');/*добавляем class active по которому кликнули */
//                 // })
//             }
//             // console.log('2');
//             // parent.classList.toggleClass('accordion__wrapper--active');
//             // elements[i].classList.remove('active'); /*удаляем у всех class active*/
//         }
//     })
// )

// --------------
// var div = document.querySelectorAll("accordion__item");

// for (var i = 0; i < div.length; i++) {
//     div[i].onclick = function () {
//         for (let i = 0; i < div.length; i++) {//прокручиваем в цикле все элементы
//             // elements[i].addEventListener('click', function () {  //при клике на элемент
//                 if (bu.classList.contains('accordion__text--active')) {
//                     for (let i = 0; i < div.length; i++) {
//                         div[i].classList.add('accordion__text--active'); //удаляем у всех class active
//                         // console.log('23');
//                     }
//                 }
//             // }
//             // )
//         }
//     }
// }
// ---------------------------------------------------------
// let re = document.querySelector('.accordion__item')
// let bu = document.querySelector('.accordion__text');
// let elements = document.getElementsByClassName("accordion__text");
// let ite = document.querySelectorAll('.accordion__item').forEach(function (element) {
//     // element.onclick = showModal;
//     // hideModal.onclick = hide;
// });

// let tab = document.querySelectorAll('.tab');

// //    отследить клик
// tab.forEach(function (element) {
//     element.onclick = showTabs;
// });
// document.querySelectorAll('.accordion__item').forEach((item) =>

// ite.addEventListener('click', () => {
// const bu = item;

// parent.classList.toggle('accordion__text');
// function showModal() {
// ite.addEventListener('click', () => {
//     for (let i = 0; i < element.length; i++) {//прокручиваем в цикле все элементы
//         // elements[i].addEventListener('click', function () {  //при клике на элемент
//         // if (bu.classList.contains('accordion__text--active')) {
//         for (let i = 0; i < element.length; i++) {
//             element[i].classList.add('accordion__text--active'); //удаляем у всех class active
//             // console.log('23');
//         }
//         // elements[i].classList.remove('accordion__text--active');
//         // }
//         // )
//         // })

//     }
// })

// }

// ---------------------------------------
// const links = document.querySelectorAll('.accordion__item');

// for (let link of links) {
//     link.addEventListener('click', () => {
//         let activeLink = document.querySelector('.accordion__text.accordion__text--active');
//         if (activeLink) {
//             activeLink.classList.remove('accordion__text--active');
//         }
//         link.classList.add('accordion__text--active');
//     })
// }
// ---------------------------------------
                // --
                // console.log('work2');
                // if (parent.classList.contains('about__td--active')) {


                // for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
                // elements[i].addEventListener('click', function () {  /*при клике на элемент
                // if (bu.classList.contains('accordion__text--active')) {
                //     // for (let i = 0; i < elements.length; i++) {
                //     //     elements[i].classList.remove('accordion__text--active'); /*удаляем у всех class active*/
                //     //     // console.log('23');
                //     // }
                //     elements[i].classList.remove('accordion__text--active');
                //     // console.log('20');
                // }
                // else {
                //     // console.log('21');
                //     // for (let i = 0; i < elements.length; i++) {
                //     elements[i].classList.add('accordion__text--active'); /*удаляем у всех class active*/
                //     // elements[i].classList.add('accordion__text--active'); /*удаляем у всех class active*/
                //     // console.log('24');
                //     // }
                // }
                // 2 шаг вешает всем дисплей ноне
                // }
                // })
            // )
// -----------------------------------------------------------------
// let elements = document.getElementsByClassName("accordion__text");

// document.querySelectorAll('.accordion__item').forEach((item) =>

//         item.addEventListener('click', () => {
//             const parent = item;
//             // const parent = item.parentNode;

//             if (parent.classList.contains('accordion__text--active')) {
//                 // parent.classList.remove('accordion__text--active');
//                 buttonModal.classList.remove('accordion__text--active');
//             }
//             else {
//                 document
//                     .querySelectorAll('.accordion__text')
//                     // .forEach((child) => child.classList.remove('accordion__wrapper--active'))
//                 buttonModal.classList.remove('accordion__text--active');

//                 // parent.classList.toggle('accordion__wrapper--active');
//                 buttonModal.classList.toggle('accordion__text--active');
//                 // parent.classList.toggleClass('accordion__wrapper--active');
//             }
//         })
//     )

// $(document).ready(function () {
//     $(".accordion__item").click(function () {
//         $(this).toggleClass("accordion__wrapper--active");
//     });
// });

// // $(document).ready(function () {
// $(".accordion__item").click(function () {
//     $(this).toggleClass("accordion__text--active");
// });
// // });

// $(".accordion__item").click(function () {
//     $(this).toggleClass("accordion__item--active");
// });



// // $padding-main
// let names = 1000;


// name2()
// function name2() {
//     // neme / 4
//     var tottal = names -30  ;
//     var cum = tottal /4; //5
//     var cum1 = names - cum ;//45
//     var cum2 = cum1 - cum ;//40
//     var cum3 = cum2 - cum ;//35
//     var $cum4 = cum3 - cum ;//30
//     console.log(cum);
//     console.log(cum1);
//     console.log(cum2);
//     console.log(cum3);
//     console.log($cum4);
// можно сделать на мекцинах но тогда будет плохая читабельность кода лутьше бы сделать в формател плагина или js или кода который потом можно удалить

// for (let index = 4; index < array.length; index++) {
//     // const element = array[index];
//     // let names -5;
//     var ad = cum -5;


//     console.log(ad);

// }

// document.querySelector('p').insertAdjacentHTML('beforebegin', 1111);


// }

/*	$(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    /*для закрыть меню*/
/*
          $('.menu__btn').on('click', function () {
              $('.menu__items').toggleClass('menu__items--active');
          });
          $('.menu__btn').on('click', function () {
              $('.menu__btn').toggleClass('active');
          });
       
        $('.home__slider').slick({
            dots: true,
            arrows: false,
             responsive: [


                 {
                     breakpoint: 1150,
                     settings: {
                         slidesToShow: 4,
                     }
                 },
                 {
                     breakpoint: 1000,
                     settings: {
                         slidesToShow: 3,
                     }
                 },
                 {
                     breakpoint: 620,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                     }
                 },
             ]
        });
       
       
       */