// Open menu if clicked
document.querySelector("#menu").addEventListener("click", function() {
    const menuOptions = document.querySelector("#menu-options");
    menuOptions.style.display = menuOptions.style.display === "block" ? "none" : "block";
});

// Close menu if clicked outside
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    const menuOptions = document.querySelector("#menu-options");
    
    if (!menu.contains(event.target)) {
        menuOptions.style.display = "none";
    }
});
