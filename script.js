   $('.has-megamenu > .nav-link').on('click', function(e) {
    if (window.innerWidth <= 991) {
        e.preventDefault();
        const parent = $(this).parent();
        
        // Toggle active class
        parent.toggleClass('active');
        
        // Show/hide megamenu container
        if (parent.hasClass('active')) {
            parent.find('.megamenu-container').slideDown(300);
        } else {
            parent.find('.megamenu-container').slideUp(300);
        }
    }
});

$('.megamenu-container').on('click', function(e) {
    e.stopPropagation();
});

$(window).on('resize', function() {
    if (window.innerWidth > 991) {
        $('.megamenu-container').css('display', '');
        
        if (!$('.category-item.active').length) {
            $('.category-item').first().addClass('active');
            const defaultCategory = $('.category-item').first().data('category');
            $(`#${defaultCategory}-content`).addClass('active');
        }
    }
});
$(document).ready(function() {
    if (!$('.category-item.active').length) {
        $('.category-item').first().addClass('active');
        const defaultCategory = $('.category-item').first().data('category');
        $(`#${defaultCategory}-content`).addClass('active');
    }
    
    $('.category-item').on('click', function(e) {
        e.preventDefault();
        
        $('.category-item').removeClass('active');
        
        $(this).addClass('active');
        
        $('.subcategory-content').removeClass('active');
        
        const category = $(this).data('category');
        $(`#${category}-content`).addClass('active');
    });
});
$(document).ready(function() {
    const defaultCategory = $('.category-item').first().data('category');
    $('.category-item').first().addClass('active');
    $(`#${defaultCategory}-content`).addClass('active');
    
    $('.category-item').on('mouseenter', function() {
        if (window.innerWidth > 991) {
            const categoryId = $(this).data('category');
            
            $('.category-item').removeClass('active');
            $('.subcategory-content').removeClass('active');
            
            $(this).addClass('active');
            $(`#${categoryId}-content`).addClass('active');
        }
    });
    
    $('.category-item').on('click', function(e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const categoryId = $(this).data('category');
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(`#${categoryId}-content`).removeClass('active');
            } else {
                $('.category-item').removeClass('active');
                $('.subcategory-content').removeClass('active');
                
                $(this).addClass('active');
                $(`#${categoryId}-content`).addClass('active');
            }
        }
    });
    
    $('.subcategory-content').on('mouseenter', function() {
        if (window.innerWidth > 991) {
            $(this).addClass('active');
        }
    });
    
    $('.has-megamenu > .nav-link').on('click', function(e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const parent = $(this).parent();
            
            parent.toggleClass('active');
            
            if (parent.hasClass('active')) {
                parent.find('.megamenu-container').slideDown(300);
            } else {
                parent.find('.megamenu-container').slideUp(300);
            }
        }
    });
    
    $('.megamenu-container').on('click', function(e) {
        e.stopPropagation();
    });
    
    $(window).on('resize', function() {
        if (window.innerWidth > 991) {
            // Reset for desktop
            $('.megamenu-container').css('display', '');
            
            if (!$('.category-item.active').length) {
                $('.category-item').first().addClass('active');
                const defaultCategory = $('.category-item').first().data('category');
                $(`#${defaultCategory}-content`).addClass('active');
            }
        }
    });
    
   
    
   
    function bindCategoryEvents() {
        $('.category-item').off('mouseenter click');
        
        $('.category-item').on('mouseenter', function() {
            if (window.innerWidth > 991) {
                const categoryId = $(this).data('category');
                
                $('.category-item').removeClass('active');
                $('.subcategory-content').removeClass('active');
                
                $(this).addClass('active');
                $(`#${categoryId}-content`).addClass('active');
            }
        });
        
        $('.category-item').on('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const categoryId = $(this).data('category');
                
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(`#${categoryId}-content`).removeClass('active');
                } else {
                    $('.category-item').removeClass('active');
                    $('.subcategory-content').removeClass('active');
                    
                    $(this).addClass('active');
                    $(`#${categoryId}-content`).addClass('active');
                }
            }
        });
    }
    
    // Uncomment to enable dynamic loading
    // loadDynamicCategories();
});
   
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

function toggleSearch() {
    const dropdown = document.getElementById('searchDropdown');
    const overlay = document.querySelector('.search-overlay');
    
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        if (overlay) overlay.style.display = 'none';
    } else {
        dropdown.classList.add('active');
        
        if (!overlay) {
            const newOverlay = document.createElement('div');
            newOverlay.className = 'search-overlay';
            newOverlay.onclick = () => toggleSearch();
            document.body.appendChild(newOverlay);
        }
        
        if (overlay) overlay.style.display = 'block';
        
        setTimeout(() => {
            const input = dropdown.querySelector('.search-input');
            if (input) input.focus();
        }, 100);
    }
}
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search');
    const dropdown = document.getElementById('searchDropdown');
    
    if (!searchContainer.contains(event.target) && dropdown.classList.contains('active')) {
        toggleSearch();
    }
});