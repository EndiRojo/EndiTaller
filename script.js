// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.getElementById("toggleMenu");
    const semanaMenu = document.getElementById("semanaMenu");

    toggleMenu.addEventListener("click", () => {
        // Alternar la visibilidad del menú de semanas
        if (semanaMenu.style.display === "none") {
            semanaMenu.style.display = "block";
        } else {
            semanaMenu.style.display = "none";
        }
    });
});