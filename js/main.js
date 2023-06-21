$('.header__button').on('click', function () {
    $('.menu__items').toggleClass('menu__items--active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});

// -------------------------------------------------------
0
$('.language').on('click', function () {
    $('.language').toggleClass('language--active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});
// -------------------------------------------------------
// 1
$('.language__link').on('click', function () {
    $('.language__link').toggleClass('language__link--active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});
// -------------------------------------------------------
// 2
// if (link.classList.contains('language__link--active'))
//     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         // elements[i].addEventListener('click', function () {  /*при клике на элемент
//         //  */
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].classList.add('language__link--active'); /*удаляем у всех class active*/
//         }
//         // this.classList.removeClass('language__link--active');/*добавляем class active по которому кликнули */
//         // })
//     }
// else {
//     let elements = document.getElementsByClassName("language__link");
//     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         elements[i].addEventListener('click', function () {  /*при клике на элемент
//  */
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.remove('language__link--active'); /*удаляем у всех class active*/
//             }
//             // this.classList.removeClass('language__link--active');/*добавляем class active по которому кликнули */
//         })
//     }
// }

// else {

// }

let item = document.querySelector('.language__link');
// -------------------------------------------------------
// 3
// let item = document.querySelector('.language__link');
document.querySelectorAll('.language__link').forEach((item) =>

        item.addEventListener('click', () => {
            const parent = item;
            // const parent = item.parentNode;
            
            if (parent.classList.contains('language__link--active')) {
                // parent.classList.add('language__link--active');
                parent.classList.toggle('language__link--active');
            }
            else {
                // document
                //     .querySelectorAll('.language__link')
                //     .forEach((child) => child.classList.remove('language__link--active'))

                parent.classList.toggle('language__link--active');
                parent.classList.remove('accordion__wrapper--active');
            }
        })
)
// // ----------------------------------------------------------
// // 4 не раблтает

// document.querySelectorAll('.language__link').forEach((item) =>

//     item.addEventListener('click', () => {
//         const parent = item;
//         // const parent = item.parentNode;

//         if (parent.classList.contains('language__link--active')) {
//             // parent.classList.add('language__link--active');
//             let elements = document.getElementsByClassName("language__link");
//             for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//                 // elements[i].addEventListener('click', function () {  /*при клике на элемент
//                 for (let i = 0; i < elements.length; i++) {
//                     elements[i].classList.add('language__link--active'); /*удаляем у всех class active*/
//                     // link.addEventListener('click', () => {
//                     if (parent.classList.contains('language__link--active')) {
//                         elements[i].classList.add('language__link--active');
//                     }
//                     // if (link.classList.contains('language__link')) {
//                     //     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//                     //         // elements[i].addEventListener('click', function () {  /*при клике на элемент
//                     //         for (let i = 0; i < elements.length; i++) {
//                     //             elements[i].classList.remove('language__link--active'); /*удаляем у всех class active*/
//                     //             link.addEventListener('click', () => {
//                     //                 if (link.classList.contains('language__link')) {
//                     //                     link.classList.add('language__link--active');
//                     //                 }
//                     //             });
//                     //         }
//                     //     }
//                     // }
//                     // }
//                     // )
//                 }
//                 // this.classList.add('active');/*добавляем class active по которому кликнули */
//                 // })
//             }
//         }
//         else {
//             // document
//             //     .querySelectorAll('.accordion__link')
//             //     .forEach((child) => child.classList.remove('language__link--active'))

//             parent.classList.toggle('language__link--active');
//             // parent.classList.toggleClass('accordion__wrapper--active');
//         }
//     })
// )
// ----------------------------------------
// let link = document.querySelector('.language__link');
// link.addEventListener('click', () => {
//     // link.classList.toggle('language__link--active');
//     // link.classList.toggleClass('language__link--active');
//     link.classList.hide('language__link--active');
// });


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

const sliderreviews = new Swiper('.sliderreviews', {
    slidesPerView: 3,
    loopedslides: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// var scroll = window.pageYOffset, array = [];
// wow.boxes.forEach(function (box) {
//     let pos = $(box).position(), height = $(box).height();
//     if (pos.top + height < scroll) {
//         $(box).addClass("visible");
//     } else {
//         array.push(box);
//     }
// });
// wow.boxes = array;

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

// initWow_scroll: function() {
//     var main = this;

//     var wow = new WOW(
//         {
//             offset: 0,          // distance to the element when triggering the animation (default is 0)
//             callback: function (box) {
//                 // the callback is fired every time an animation is started
//                 // the argument that is passed in is the DOM node being animated
//             },
//             scrollContainer: null // optional scroll container selector, otherwise use window
//         }
//     );
//     wow.init();

//     return main;
// }

// $(function () {

//     var $window = $(window),
//         win_height_padded = $window.height() * 1.1,
//         isTouch = Modernizr.touch;

//     if (isTouch) { $('.revealOnScroll').addClass('animated'); }

//     $window.on('scroll', revealOnScroll);

//     function revealOnScroll() {
//         var scrolled = $window.scrollTop(),
//             win_height_padded = $window.height() * 1.1;

//         // Showed...
//         $(".revealOnScroll:not(.animated)").each(function () {
//             var $this = $(this),
//                 offsetTop = $this.offset().top;

//             if (scrolled + win_height_padded > offsetTop) {
//                 if ($this.data('timeout')) {
//                     window.setTimeout(function () {
//                         $this.addClass('animated ' + $this.data('animation'));
//                     }, parseInt($this.data('timeout'), 10));
//                 } else {
//                     $this.addClass('animated ' + $this.data('animation'));
//                 }
//             }
//         });
//         // Hidden...
//         $(".revealOnScroll.animated").each(function (index) {
//             var $this = $(this),
//                 offsetTop = $this.offset().top;
//             if (scrolled + win_height_padded < offsetTop) {
//                 $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
//             }
//         });
//     }

//     revealOnScroll();
// });
// document.querySelector('body').onmouseleave = function () {
//     // мышь колесико
//     console.log('wheel');
//     return false
// }

// let pageYOffset = 10;

// data
// console.log(img);
// console.log('.abv');
// window.addEventListener('wheel', function (evt) {
//     if (evt.deltaY < 0 && window.scrollY === 0) {
//         // поймали
//         bottom2()
//     }
// });
// ---------------------------
// var scrollPos = 0;
// $(window).scroll(function () {
//     var st = $(this).scrollTop();
//     if (st > scrollPos) {
//         $('#result').html('Вниз');
//         top2()
//     } else {
//         $('#result').html('Вверх');
//         bottom2()
//     }
//     scrollPos = st;
// });
// ---------------------------
// window.addEventListener('scroll', function () {
//     // $(img).css('transform', 'rotate3d(2, 1, 0,');
//     // var img = $(this);
//     // var degree = getDegreeElementById($(this).attr('id')) + 50;
//     // img.css('transform', 'rotate3d(2, 1, 0,)');
//     // left();
//     console.log('work');

//     // document.getElementById('body').innerHTML = pageYOffset + 'px';

//     // img.style.margin('10');
//     // // data
//     // console.log(img);
// });

// function left(params) {
// let img = document.querySelector('.images');
// let abv = document.querySelector('.abv');
// let aba = document.querySelector('.aba');

// let left = 0;
// let right = 0;
// let bottom1 = 0;
// let top1 = 0;

// // abv.addEventListener('click', () => {
// //     // let left = -500;
// //     // left = left - 500;
// //     // left1()
// //     bottom2()
// // });
// // aba.addEventListener('click', () => {
// //     // let left = -500;
// //     // left = left - 500;
// //     // right1()
// //     // top2()
// // });

// // function left1() {
// //     left = left - 10;
// //     abv.style.marginLeft = left + 'px';
// // }
// // function right1() {
// //     right = right - 10;
// //     aba.style.marginRight = right + 'px';
// // }



// function top2() {
//     top1 = top1 - 10;
//     aba.style.marginTop = top1 + 'px';
// }

// function bottom2() {
//     bottom1 = bottom1 + 10;
//     aba.style.marginBottom = bottom1 + 'px';
// }

// bottom



// document.onkeypress = function (event) {
//     console.log('e.keyCode');
//     let sq = document.querySelector('.sq');
//     if (event.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if (event.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }

// }
// ------------
// var style = window.getComputedStyle(elem1, null);
// var trans = style.transform;
// ------------
// console.log(trans);
// let imgd = document.getElementById(".abv").style.transform = "rotate(50deg)";
// console.log(imgd);
// ----------
// let img = document.querySelector('.img');
// img.style.transform = `rotate(80deg)`;
// console.log(img);
// ----------
// let transform = document.querySelector('.img').img.style.transform;
// console.log(transform);
// -----------------

// var el = document.getElementById("thing");
// var st = window.getComputedStyle(el, null);
// var tr = st.getPropertyValue("-webkit-transform") ||
//     st.getPropertyValue("-moz-transform") ||
//     st.getPropertyValue("-ms-transform") ||
//     st.getPropertyValue("-o-transform") ||
//     st.getPropertyValue("transform") ||
//     "FAIL";

// With rotate(30deg)...
// matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
// console.log('Matrix: ' + tr);

// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
// -----------------
// var values = tr.split('(')[1].split(')')[0].split(',');
// var a = values[0];
// var b = values[1];
// var c = values[2];
// var d = values[3];

// var scale = Math.sqrt(a * a + b * b);

// console.log('Scale: ' + scale);

// // arc sin, convert from radians to degrees, round
// var sin = b / scale;
// // next line works for 30deg but not 130deg (returns 50);
// // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
// var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

// console.log('Rotate: ' + angle + 'deg');


// var eText = document.getElementById('.abv');

// eText.style.MozTransform = 'rotate(45deg)';

// eText.style.WebkitTransform = 'rotate(45deg)';

// eText.style.OTransform = 'rotate(45deg)';

// eText.style.MsTransform = 'rotate(45deg)';

// eText.style.transform = 'rotate(45deg)';
// console.log(eText);



// myclass.addEventListener("click", function () {
//     $('.content_active').attr('style', 'transform'); // Именно УДАЛИТ свойство style
// });
// transform: translate3d(0px, 0px, 0px);
// transform: translate3d(0px, -20px, 0px);
// AOS.init();
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