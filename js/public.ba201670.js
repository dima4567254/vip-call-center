(self.webpackChunk=self.webpackChunk||[]).push([[501],{5113:()=>{},681:(e,s,a)=>{a(6034),a(6079),a(9889),a(3305)},6079:(e,s,a)=>{var t;a(9826),a(2564),(t=$(".phone")).on("focus",(function(){$(this).attr("placeholder","+38 (XXX) XXX XX XX")})),t.on("blur",(function(){$(this).attr("placeholder","Телефон")})),$(".default-form").on("submit",(function(e){e.preventDefault();var s=$(e.target),a=$(".modal-success"),t=s.find(".default-btn");console.log(t),t.html('<img src="/images/icons/loader.svg"/> <span>Отправка</span>'),$.ajax({method:"POST",data:s.serialize(),url:s.attr("action"),success:function(e){a.addClass("active"),t.html("<span>Отправить</span>")},error:function(e){var a=e.responseJSON.errors,o=null;for(key in s.find(".input-error").remove(),a){for(var r=0;r<a[key].length;r++)o+=a[key];var i='<div class="input-error">'.concat(o,"</div>");"#"!==key&&$(i).insertAfter(s.find("input[name=".concat(key,"]"))),o=""}t.html("<span>Отправить</span>"),setTimeout((function(){s.find(".input-error").remove()}),5e3)}})}))},6034:()=>{$(".header-language__switcher").on("click",(function(){$(this).toggleClass("active")})),$(".burger-menu").on("click",(function(){$(this).toggleClass("active"),$(".header-nav").toggleClass("active")})),$(window).on("scroll",(function(e){var s=$("header"),a=0;a=window.innerWidth<992?30:100,window.scrollY>a?(s.addClass("active"),AOS.refresh({duration:800,easing:"cubic-bezier(.4, .8, .74, 1)",once:!0})):s.removeClass("active");var t=-10*window.scrollY/100;$(".section-figure2, .section-figure").attr("style","transform: translate3d(0px, "+t+"px, 0px)")}))},3305:(e,s,a)=>{function t(e){var s=$(e);s.on("click",(function(){var e=$(this);e.hasClass("active")?(e.removeClass("active"),e.find(".default-desc").slideUp("slow")):(s.removeClass("active"),s.find(".default-desc").slideUp("slow"),e.addClass("active"),e.find(".default-desc").slideDown("slow"))}))}a(9826),AOS.init({duration:800,easing:"cubic-bezier(.4, .8, .74, 1)",once:!0}),$("input.phone").mask("+38 (999) 999 99 99",{placeholder:"+38 (0ХХ) XХХ ХХ XX"}),t(".client-items .item"),t(".faq-items .item"),$("button[data-modal]").on("click",(function(){var e=$($(this).attr("data-modal")),s=$("html");e.addClass("active"),s.addClass("active"),e.on("click",(function(a){var t=$(a.target);(t.hasClass("close-modal")||t.hasClass("active"))&&(e.removeClass("active"),s.removeClass("active"))}))})),$(".close-success").on("click",(function(){$(this).parents(".modal-success").removeClass("active")})),$(document).ready((function(){$(document).on("click",'a[href^="#"]',(function(e){e.preventDefault();var s=$(this).attr("href");$(".burger-menu").removeClass("active"),$(".header-nav").removeClass("active"),$("body,html").animate({scrollTop:$(s).offset().top-100},800)}))})),$('a[href="#home"]').on("click",(function(){$(".burger-menu").removeClass("active"),$(".header-nav").removeClass("active"),$("body,html").animate({scrollTop:$("body").offset().top},800)})),$(".clamp-btn").on("click",(function(){$(this).parents(".default-desc").toggleClass("desc-clamp")})),$(".clients-slider .slide").on("click",(function(){var e=$(".modal-photo"),s=$(this);e.find("img").attr("src",s.find("img").attr("src")),e.addClass("active"),e.on("click",(function(s){var a=$(s.target);(a.hasClass("close-modal")||a.hasClass("active"))&&(e.removeClass("active"),html.removeClass("active"))}))}))},9889:()=>{var e=function(e,s){return{cases:{fade:!1,infinite:!0,arrows:!0,slidesToShow:3,slidesToScroll:3,prevArrow:e,nextArrow:s,autoplay:!1,cssEase:"ease",responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1}}]},clients:{fade:!1,infinite:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,prevArrow:e,nextArrow:s,autoplay:!1,cssEase:"ease",responsive:[{breakpoint:992,settings:{dots:!1,arrows:!1}}]},reviews:{fade:!1,infinite:!0,arrows:!0,slidesToShow:3,slidesToScroll:3,prevArrow:e,nextArrow:s,autoplay:!1,cssEase:"ease",responsive:[{breakpoint:992,settings:{dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1}}]}}};function s(e,s){$(e).slick(s)}$(document).ready((function(){s(".cases-slider",e("#cases-section .prev-arrow","#cases-section .next-arrow").cases),s(".clients-slider",e(".clients-slider__wrap .prev-arrow",".clients-slider__wrap .next-arrow").clients),s(".reviews-slider",e(".reviews-slider__wrap .prev-arrow",".reviews-slider__wrap .next-arrow").reviews)}))},2564:(e,s,a)=>{var t=a(2109),o=a(7854),r=a(8113),i=[].slice,n=function(e){return function(s,a){var t=arguments.length>2,o=t?i.call(arguments,2):void 0;return e(t?function(){("function"==typeof s?s:Function(s)).apply(this,o)}:s,a)}};t({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:n(o.setTimeout),setInterval:n(o.setInterval)})}},0,[[681,666,941],[5113,666,941]]]);