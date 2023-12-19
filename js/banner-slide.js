"use strict";

const bannerElems = document.querySelectorAll(".header_banner0");

let k = 0;

(function showBanner() {
    if (k >= 1) {
        bannerElems[k - 1].classList.add("banner-none");
        if (k == bannerElems.length) k = 0;
    }
    bannerElems[k].classList.remove("banner-none");
    k++;
    setTimeout(showBanner, 20000);
})();
