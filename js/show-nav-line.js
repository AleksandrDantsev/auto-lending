"use strict";

const navHeaderLine = document.querySelector(".header__choise");
const headerBlock = document.querySelector(".header__info-middle");
let imageOne = document.querySelector(".main__hear-img");
let imageSecond = document.querySelector(".main__spec-img");

if (document.documentElement.clientWidth < 750) {
    console.log(document.documentElement.clientHeight);
    imageOne.classList.add("show-images");
    imageSecond.classList.add("show-images");
    document.removeEventListener("scroll", scrollPage);
}

document.addEventListener("scroll", scrollPage);

function scrollPage() {
    if (window.innerHeight >= imageOne.getBoundingClientRect().bottom) {
        imageOne.classList.add("show-images");
    }
    if (window.innerHeight >= imageSecond.getBoundingClientRect().bottom) {
        imageSecond.classList.add("show-images");
    }
}
