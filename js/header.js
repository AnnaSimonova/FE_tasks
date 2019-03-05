"use strict";

document.body.onload = function() {
    toggleMenuItems();
};

function toggleMenuItems() {
    let menuItems = document.querySelectorAll(".menu_item");
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
    let targetBlock = document.getElementById(targetBlockName);
    let burgerMenu = targetBlock.querySelector(".burger_menu");
    let closeBtn = targetBlock.querySelector(".close_btn");
    let menuList = targetBlock.querySelector(".menu_list");

    burgerMenu.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    menuList.classList.toggle("hidden");

    let secondBlock = document.getElementById(secondBlockName);
    let secBurgerMenu = secondBlock.querySelector(".burger_menu");
    if (secBurgerMenu.classList.contains("hidden")) {
        let secCloseBtn = secondBlock.querySelector(".close_btn");
        let secMenuList = secondBlock.querySelector(".menu_list");

        secBurgerMenu.classList.toggle("hidden");
        secCloseBtn.classList.toggle("hidden");
        secMenuList.classList.toggle("hidden");
    }

}