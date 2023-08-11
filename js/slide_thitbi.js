
    let slideIndex1 = 1;
    showSlides1(slideIndex1);

    function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
    }

    function currentSlide1(n) {
        showSlides1(slideIndex1 = n);
    }


    function showSlides1(n) {
        let i;
        let slides = document.getElementsByClassName("mySlide1");
        let dots = document.getElementsByClassName("demo1");
        if (slides && slides.length > 0 && n > 0 && n <= slides.length) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[n - 1].style.display = "flex";
            slides[n - 1].style.justifyContent = "center";
            dots[n - 1].className += " active";
        }
    }
