"use strict";

document.body.onload = function() {
    toggleHeaderMenuItems();
    chooseSortType();
};

function toggleHeaderMenuItems() {
    let menuItems = document.querySelectorAll("header ul li a");
    menuItems.forEach(function(item) {
        item.addEventListener('click', function () {
            item.classList.add("active-elem");
            menuItems.forEach(function(value) {
                if (value !== item) {
                    value.classList.remove("active-elem");
                }
            });
        });
    });
}

function toggleSideMenu(targetBlockName) {
    // toggle target menu block
    let targetBlock = document.getElementById(targetBlockName);
    let burgerMenu = targetBlock.querySelector(".burger_menu");
    let menuList = targetBlock.querySelector(".menu_list");

    burgerMenu.classList.contains('active-elem') ? burgerMenu.classList.remove('active-elem') : burgerMenu.classList.add('active-elem');
    menuList.classList.toggle("hidden");
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