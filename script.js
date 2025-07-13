   $(document).ready(function(){
            var articlesCarousel = $('#banner-owl').owlCarousel({
                rtl: true,
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                // stagePadding: 100,
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                    
                  
                }
            });
            
            // Custom Navigation
            $('.carousel-prev').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('.carousel-next').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });
        $(document).ready(function(){
            $('#gallery-owl').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
                responsive: {
                    0: {
                        items: 1.5
                    },
                     500: {
                        items: 2
                    },
                    680: {
                        items: 3
                    },
                    1000: {
                        items: 3.5
                    },
                     1200: {
                        items: 4
                    },
                    1550: {
                        items: 5
                    }
                }
            });
            
           
        });
           $(document).ready(function(){
            $('#glory-owl-one').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            
           
        });
         $(document).ready(function(){
            $('#glory-owl-two').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
            
           
        });