"use strict";

const header = document.querySelector("header");
const burgerButton = document.querySelector(".header__burger");
const headerMenuShift = document.querySelector(".header__menu-drop");
const closesBt = document.querySelector(".close-icon");

const main = document.querySelector("main");

header.addEventListener("click", openMenu);

function openMenu(event) {
    if (event.target.closest(".header__burger")) {
        headerMenuShift.classList.toggle("open");
        blockedPages(true);
    }
    if (event.target.closest(".close-icon")) {
        headerMenuShift.classList.remove("open");
        blockedPages(false);
    }
    if (headerMenuShift.classList.contains("open")) {
        if (event.target.closest(".header__info-banner-wrap")) {
            headerMenuShift.classList.remove("open");
            blockedPages(false);
        }
    }
}

function blockedPages(bool) {
    const html = document.documentElement;
    bool ? (html.style.overflowY = "hidden") : (html.style.overflowY = "unset");
}
