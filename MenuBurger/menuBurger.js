document.addEventListener("DOMContentLoaded", function() {
    let allBtnsNavbar = document.querySelectorAll(".toggle-navbar");  
    allBtnsNavbar.forEach(btn => {
        let idNavbar = btn.dataset.cibleidnavbar;

        btn.addEventListener("click", function(){
            document.getElementById(idNavbar).classList.toggle("show-menu");
        })
    });
});