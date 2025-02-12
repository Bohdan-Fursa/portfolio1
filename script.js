document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger_menu");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    // Закриваємо меню при натисканні на будь-який пункт
    document.querySelectorAll(".menu a").forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("active");
        });
    });
});
