import "./main.scss";
import {
    register
} from 'swiper/element/bundle';
import Swiper from 'swiper';

(function(){
const breakpoint = window.matchMedia('(min-width:48em)');

let mySwiper;

const breakpointChecker = function () {

    if (breakpoint.matches === true) {

        if (mySwiper !== undefined) mySwiper.destroy(true, true);

        return;

    } else if (breakpoint.matches === false) {

        return enableSwiper();

    }

};


const enableSwiper = function () {

    mySwiper = new Swiper('.swiper', {

        loop: true,

        slidesPerView: 1.2,
        spaceBetween: 16,
        centeredSlides: true,

        a11y: true,
        keyboardControl: true,
        grabCursor: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
register();
})()