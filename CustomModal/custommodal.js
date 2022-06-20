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