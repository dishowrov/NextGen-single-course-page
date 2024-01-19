// $(function () {
//     var owl = $(".dis-carousel");
//     owl.owlCarousel({ 
//         items: 4,
//         margin: 15,
//         loop: true,
//         navText: ['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>'],
//         nav: true,
//         dots: false,
//         responsive: {
//             480: {
//                 items: 2,
//             },
//             768: {
//                 items: 3,
//             },
//             992: {
//                 items: 4,
//             }
//         },
//     });
// });

$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
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
            },
            992: {
                items: 4,
            }
        },
    });
}); 
