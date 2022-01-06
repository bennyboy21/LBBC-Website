var menu = 0
const section = document.getElementsByTagName("section")
const mainText = document.getElementById("main-Text")
var prayerRequestPage = 0;
var pastoralStaff = 0;
var admin = 0;

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting == false) {
        document.getElementById("top-Bar").classList.add("open1")
    } else {
        document.getElementById("top-Bar").classList.remove("open1")
    }
})

observer.observe(section[0])

const observer1 = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting == false) {
        document.getElementById("prayer-Request").classList.add("request")
        document.getElementById("prayer-Request-Text").classList.add("request")
        document.querySelector(".fa-comments").classList.add("request")
    } else {
        document.getElementById("prayer-Request").classList.remove("request")
        document.getElementById("prayer-Request-Text").classList.remove("request")
        document.querySelector(".fa-comments").classList.remove("request")
    }

    if(entries[0].isIntersecting == false) {
        document.getElementById("top-Bar").classList.add("open1")
    } else {
        document.getElementById("top-Bar").classList.remove("open1")
    }
})
observer1.observe(mainText)

document.getElementById("menu-Button-Holder").addEventListener("click", function() {
    if(menu == 0 && prayerRequestPage == 0) {
        document.getElementById("blur-Background").classList.remove("back")
        document.getElementById("menu-Button").classList.add("open")
        document.getElementById("menu-Page").classList.add("open")
        document.getElementById("top-Bar").classList.add("open")
        document.getElementById("blur-Background").classList.add("open")
        menu = 1
    } else {
        document.getElementById("menu-Button").classList.remove("open")
        document.getElementById("menu-Page").classList.remove("open")
        document.getElementById("top-Bar").classList.remove("open")
        document.getElementById("blur-Background").classList.remove("open")
        setTimeout(function() {
            document.getElementById("blur-Background").classList.add("back")
        }, 500)
        menu = 0
    }

    if(prayerRequestPage == 1) {
        document.getElementById("request-Prayer-Page").classList.remove("open2")
        prayerRequestPage = 0
    } else {

    }
})

document.getElementById("prayer-Request").addEventListener("click", function() {
    document.getElementById("request-Prayer-Page").classList.add("open2")
    document.getElementById("menu-Button").classList.add("open")
    prayerRequestPage = 1
})

document.querySelector(".drop-Down-One").addEventListener("click", function() {
    if(pastoralStaff == 0) {
        document.querySelector(".drop-Down-Options-Container-One").classList.add("open")
        document.querySelector(".drop-Down-Indentifyer-One").classList.add("open")
        pastoralStaff = 1
    } else {
        document.querySelector(".drop-Down-Options-Container-One").classList.remove("open")
        document.querySelector(".drop-Down-Indentifyer-One").classList.remove("open")
        pastoralStaff = 0
    }
    prayerRequestPage = 1
})

document.querySelector(".drop-Down-Two").addEventListener("click", function() {
    if(admin == 0) {
        document.querySelector(".drop-Down-Options-Container-Two").classList.add("open")
        document.querySelector(".drop-Down-Indentifyer-Two").classList.add("open")
        admin = 1
    } else {
        document.querySelector(".drop-Down-Options-Container-Two").classList.remove("open")
        document.querySelector(".drop-Down-Indentifyer-Two").classList.remove("open")
        admin = 0
    }
    prayerRequestPage = 1
})

document.querySelector(".fa-instagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/lbbclighthouse/")
})

document.querySelector(".fa-youtube").addEventListener("click", function() {
    window.open("https://www.youtube.com/channel/UCZmGQQ5CXz171JleXUjMHMA")
})