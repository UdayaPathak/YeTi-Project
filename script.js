const menuBtn = document.querySelectorAll(".menu-button");


//console.log(menuBtn);
//toggle sidebar visibility when menu button are clicked
menuBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        document.body.classList.toggle("sidebar-hidden");
    });
});
const screenOverlay = document.querySelector(".screen-overlay");
screenOverlay.addEventListener("click", ()=> {
    document.body.classList.toggle("sidebar-hidden");
});

if(window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
};
const themeBtn = document.querySelector(".theme-button");
//console.log(themeBtn);

if(localStorage.getItem("darkMode") === "enaled") {
    document.body.classList.add("dark-mode");
    themeBtn.classList.replace("uil-moon", "uil-sun");
} else {
    themeBtn.classList.replace("uil-sun", "uil-moon");
}

themeBtn.addEventListener("click", ()=> {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" :
        "disabled");
    themeBtn.classList.toggle("uil-sun", isDarkMode);
    themeBtn.classList.toggle("uil-moon", isDarkMode);
});