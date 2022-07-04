document.addEventListener("DOMContentLoaded", function() {
    let allBtnsNavbar = document.querySelectorAll(".toggle-navbar");  
    allBtnsNavbar.forEach(btn => {
        let idNavbar = btn.dataset.cibleidnavbar;

        btn.addEventListener("click", function(){
            document.getElementById(idNavbar).classList.toggle("show-menu");
        })
    });
});


function toggleModal(idModal){
    document.getElementById(idModal).classList.toggle("show");
}


 document.addEventListener("DOMContentLoaded", function() {
    var allCloseBtn = document.querySelectorAll(".btn-close-modal");
    allCloseBtn.forEach(btn => {
        btn.addEventListener("click", function(event){
            btn.closest('.modal').classList.toggle('show');
        })
    });
  });