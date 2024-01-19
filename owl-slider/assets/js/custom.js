$(function () {
    // Owl Carousel
    var owl = $(".dis-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        navText: [
            "<i aria-hidden='true' class='fas fa-chevron-left'></i>",
            "<i aria-hidden='true' class='fas fa-chevron-right'></i>",
        ],
        responsive: {
            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });
}); 
