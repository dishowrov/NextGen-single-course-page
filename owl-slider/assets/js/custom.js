$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 15,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        },
        navText: [$('.am-next'), $('.am-prev')]
    });
});
