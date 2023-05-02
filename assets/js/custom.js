jQuery(document).ready(function ($) {
// headroom
    $(".headroom").headroom({
        "tolerance": 20,
        "offset": 50,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
//background carousel
    const head = document.getElementById("head");
    const images = ["./assets/images/import/bg-1.jpg", "./assets/images/import/bg-2.jpg", "./assets/images/import/bg-3.jpg","./assets/images/import/hero-img.png"];   

    let index = 0;

    setInterval(() => {
    head.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
    }, 5000); 


//da slider
	$('#da-slider').cslider({
		autoplay: true,
		bgincrement: 0
	});
//Set the carousel options
	$('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});
// fancybox
    $(".fancybox").fancybox();
//isotope
    if ($('.isotopeWrapper').length) {
        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $('.navbar-inverse').on('click', 'li a', function () {
            $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
        });
        $('#filter a').click(function () {
            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        $(window).smartresize(function () {
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }
});
