const navHeader = document.querySelector(".header");
const navBar = document.querySelector(".navbar-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navBar.classList.toggle("active");
    navHeader.classList.toggle("active");
});

const dropdownItemElements = document.querySelectorAll(".navbar-dropdown-item");

dropdownItemElements.forEach(function (item) {
    item.addEventListener("click", function () {
        dropdownItemElements.forEach(function (otherItem) {
            if (otherItem !== item) {
                otherItem.classList.remove("open");
                const otherDropdownMenu = otherItem.querySelector(".dropdown-menu");
                if (otherDropdownMenu) {
                    otherDropdownMenu.classList.remove("active");
                }
            }
        });

        this.classList.toggle("open");
        const dropdownMenu = this.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("active");
        }
    });
});

document.querySelectorAll(".dropdown-menu a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
