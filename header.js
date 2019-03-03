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

function toggleSideMenu(blockName) {
    let targetBlock = document.getElementById(blockName);
    let burgerMenu = targetBlock.querySelector(".burger_menu");
    let closeBtn = targetBlock.querySelector(".close_btn");
    let menuList = targetBlock.querySelector(".menu_list");

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.add("hidden");
        closeBtn.classList.remove("hidden");
        menuList.classList.remove("hidden");
    });
    closeBtn.addEventListener('click', function() {
        burgerMenu.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        menuList.classList.add("hidden");
    });
}