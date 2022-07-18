function CarouselNext(idCarousel){
    let mesSlides = document.querySelectorAll("#"+idCarousel+" .caroussel-slide");


    for (let index = 0; index < mesSlides.length; index++) {
        const element = mesSlides[index];

        if(element.classList.contains('active')){
            if(index == mesSlides.length -1){
                mesSlides[0].classList.add("active")
            }
            else{
                mesSlides[index+1].classList.add("active")
            }
            element.classList.remove('active');
            break;
        }
    }
}

function CarouselPrev(idCarousel){
    let mesSlides = document.querySelectorAll("#"+idCarousel+" .caroussel-slide");


    for (let index = 0; index < mesSlides.length; index++) {
        const element = mesSlides[index];

        if(element.classList.contains('active')){
            if(index == 0){
                mesSlides[mesSlides.length -1].classList.add("active")
            }
            else{
                mesSlides[index-1].classList.add("active")
            }
            element.classList.remove('active');
            break;
        }
    }
}