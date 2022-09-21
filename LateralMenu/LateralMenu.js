function expandMenuLateral(){
    let monMenu = document.getElementById("menuLateral");
    if(monMenu.classList.contains("expand")){
        monMenu.classList.remove("expand");
        monMenu.classList.add("reduce");
    }
    else{
        monMenu.classList.add("expand");
        monMenu.classList.remove("reduce");
    }
}