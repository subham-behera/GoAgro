

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});
  
gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 0) {
        navbar.classList.add("navbar-sticky");
    } else {
        navbar.classList.remove("navbar-sticky");
    }
});

gsap.to("#herosection", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#herosection",
        start: "top",
        end: "top +=100",
        scrub: 1,
    },
});


$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Enable navigation with buttons
    $('.prev').on('click', function() {
        $('.carousel').slick('slickPrev');
    });

    $('.next').on('click', function() {
        $('.carousel').slick('slickNext');
    });
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement( 
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}