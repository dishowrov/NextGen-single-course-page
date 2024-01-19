$(function () {
    var owl = $(".dis-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 15,
        loop: true,
        navText: [$('.am-prev'), $('.am-next')],
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
    });
});
