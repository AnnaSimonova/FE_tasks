"use strict";

const burgerMenu = document.querySelector(".burger_menu");
const menuList = document.querySelector(".menu_list");
const menuItems = document.querySelector(".menu_items");
const blurredPart = document.querySelector(".blurred");

document.body.onload = function() {
    toggleHeaderMenuItems();
    toggleSideMenu();
    chooseSortType();
};

function toggleHeaderMenuItems() {
    let menuItems = document.querySelectorAll(".header_list li a");
    menuItems.forEach(function(item) {
        item.addEventListener('click', function () {
            item.classList.add("header-menu-active");
            menuItems.forEach(function(value) {
                if (value !== item) {
                    value.classList.remove("header-menu-active");
                }
            });
        });
    });
}

function toggleSideMenu() {
    burgerMenu.addEventListener('click', function() {
        if (burgerMenu.classList.contains('burger_menu_active')) {
            burgerMenu.classList.remove('burger_menu_active');
            menuList.classList.add("hidden");
            menuItems.classList.add("menu_items_hidden");
            blurredPart.classList.add("hidden");
        } else {
            burgerMenu.classList.add('burger_menu_active');
            menuList.classList.remove("hidden");
            menuItems.classList.remove("menu_items_hidden");
            menuItems.addEventListener("transitionend", blurBackground());
        }
    });
}

function blurBackground() {
    blurredPart.classList.remove("hidden");
    // menuItems.removeEventListener("transitionend", blurBackground);
}

function chooseSortType() {
    let sortTypes = document.querySelectorAll(".sort_field span");
    sortTypes.forEach(function(item) {
        item.addEventListener('click', function () {
            item.classList.add("sort_active");
            sortTypes.forEach(function(value) {
                if (value !== item) {
                    value.classList.remove("sort_active");
                }
            });
        });
    });
}