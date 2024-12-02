
//faq toggle stuff 
$('.togglefaq').click(function(e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
     $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('icon-plus icon-minus');
    });

    
let currentIndex = 0;
        const carouselWrapper = document.getElementById('carousel-wrapper');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            carouselWrapper.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + 20)}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

