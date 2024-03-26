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

//Dark Mode
function Darkmode() {
    const navbar = document.querySelector(".header");
    const banner = document.querySelector(".banner");
    const waves = document.querySelector(".waves")
    const body = document.body
    const Button = document.querySelector(".login__btn")


    body.classList.toggle("dark-mode")
    navbar.classList.toggle("dark-mode");
    banner.classList.toggle("dark-mode");
    waves.classList.toggle("dark")
    Button.classList.toggle("dark-mode")

 }

var data = [
    {
        "id": 1,
        "title": "หัวข้อบล็อกที่หนึ่ง",
        "description": "เนื้อหาบล็อกที่หนึ่ง",
        "coverpic": "url_ภาพปก_บล็อกที่หนึ่ง.jpg",
        "name": "ชื่อผู้เขียนบล็อกที่หนึ่ง",
        "tags": ["#lastest", "tag2", "tag3"],
        "date" : "2012"
    },
    {
        "id": 2,
        "title": "หัวข้อบล็อกที่สอง",
        "description": "เนื้อหาบล็อกที่สอง",
        "coverpic": "url_ภาพปก_บล็อกที่สอง.jpg",
        "name": "ชื่อผู้เขียนบล็อกที่สอง",
        "tags": ["tag2", "tag4"],
        "date" : "2012"
    },
    {
        "id": 3,
        "title": "หัวข้อบล็อกที่สาม",
        "description": "เนื้อหาบล็อกที่สาม",
        "coverpic": "url_ภาพปก_บล็อกที่สาม.jpg",
        "name": "ชื่อผู้เขียนบล็อกที่สาม",
        "tags": ["tag1", "tag3", "tag5"],
        "date" : "2012"
    }
]

