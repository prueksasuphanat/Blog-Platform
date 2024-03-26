// Toggle menu
function ToggleMenu() {
    const ToggleMenu = document.querySelector(".nav__menu");
    const CloseMenu = document.querySelector(".nav__close");
    const ToggleHide = document.querySelector(".nav__toggle");

    ToggleMenu.style.display = "block";
    CloseMenu.style.display = "block";
    ToggleHide.style.display = "none";
}

function CloseMenu() {
    const CloseMenu = document.querySelector(".nav__menu");
    const ToggleHide = document.querySelector(".nav__toggle");
    const Closebtn = document.querySelector(".nav__close")
    
    
    ToggleHide.style.display = "block";
    Closebtn.style.display ="none";
    CloseMenu.style.display = "none";

}
