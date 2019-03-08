"use strict";

document.body.onload = function() {
    toggleHeaderMenuItems();
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

function toggleSideMenu(targetBlockName, secondBlockName) {
    // toggle target menu block
    let targetBlock = document.getElementById(targetBlockName);
    let burgerMenu = targetBlock.querySelector(".burger_menu");
    let menuList = targetBlock.querySelector(".menu_list");

    burgerMenu.classList.contains('active-elem') ? burgerMenu.classList.remove('active-elem') : burgerMenu.classList.add('active-elem');
    menuList.classList.toggle("hidden");

    // toggle second menu block
    let secondBlock = document.getElementById(secondBlockName);
    let secBurgerMenu = secondBlock.querySelector(".burger_menu");
    if (secBurgerMenu.classList.contains("active-elem")) {
        let secMenuList = secondBlock.querySelector(".menu_list");
        secBurgerMenu.classList.contains('active-elem') ? secBurgerMenu.classList.remove('active-elem') : secBurgerMenu.classList.add('active-elem');
        secMenuList.classList.toggle("hidden");
    }
}