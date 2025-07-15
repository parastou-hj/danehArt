
$(document).ready(function() {
    // Sticky Header functionality
    const headerBottom = $('.header-bottom');
    const headerContainer = $('.header-container');
      const logo= $('.logo');
      const logoSec=$('.logo-sec')
    
    // ایجاد placeholder برای جلوگیری از جهش محتوا
    const placeholder = $('<div class="sticky-placeholder"></div>');
    headerContainer.after(placeholder);
    
    let isSticky = false;
    
    // محاسبه offset برای شروع sticky
    function getHeaderBottomOffset() {
        const headerTop = $('.header-top');
        const headerMiddle = $('.header-middle');
      
        
        let offset = 0;
        if (headerTop.length) offset += headerTop.outerHeight();
        if (headerMiddle.length) offset += headerMiddle.outerHeight();
        
        return offset;
    }
    
    function handleScroll() {
        const scrollTop = $(window).scrollTop();
        const headerBottomOffset = getHeaderBottomOffset();
        
        if (scrollTop >= headerBottomOffset) {
            // اگر sticky نیست، sticky کن
            if (!isSticky) {
                headerBottom.addClass('sticky');
                placeholder.addClass('active').height(headerBottom.outerHeight());
                isSticky = true;
                logo.addClass('logo-sticky');
                logoSec.addClass('logo-sec-sticky')

            }
        } else {
            // اگر به بالای صفحه برگشته، sticky را بردار
            if (isSticky) {
                headerBottom.removeClass('sticky');
                placeholder.removeClass('active');
                isSticky = false;
                 logo.removeClass('logo-sticky');
                logoSec.removeClass('logo-sec-sticky')
            }
        }
    }
    
    // Event listener با performance optimization
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    $(window).on('scroll', requestTick);
    
    // بررسی اولیه در صورت لود شدن صفحه در وسط
    handleScroll();
    
    // مدیریت resize برای responsive بودن
    $(window).on('resize', function() {
        if (isSticky) {
            placeholder.height(headerBottom.outerHeight());
        }
    });
});
   
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

 // Mobile Menu Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileSidebar = document.getElementById('mobileSidebar');
            const mobileOverlay = document.getElementById('mobileOverlay');
            const mobileCloseBtn = document.getElementById('mobileCloseBtn');

            // Toggle mobile menu
            function toggleMobileMenu() {
                mobileMenuToggle.classList.toggle('active');
                mobileSidebar.classList.toggle('active');
                mobileOverlay.classList.toggle('active');
                document.body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
            }

            // Close mobile menu
            function closeMobileMenu() {
                mobileMenuToggle.classList.remove('active');
                mobileSidebar.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Event listeners
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            mobileCloseBtn.addEventListener('click', closeMobileMenu);
            mobileOverlay.addEventListener('click', closeMobileMenu);

            // Handle submenu toggles
            document.querySelectorAll('[data-submenu]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const submenuId = this.getAttribute('data-submenu') + '-submenu';
                    const submenu = document.getElementById(submenuId);
                    const parentItem = this.closest('.mobile-nav-item');
                    
                    // Toggle submenu
                    parentItem.classList.toggle('active');
                    submenu.classList.toggle('active');
                });
            });

            // Handle megamenu toggles
            document.querySelectorAll('[data-megamenu]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const megamenuId = this.getAttribute('data-megamenu') + '-megamenu';
                    const megamenu = document.getElementById(megamenuId);
                    const parentItem = this.closest('.mobile-nav-item');
                    
                    // Toggle megamenu
                    parentItem.classList.toggle('active');
                    megamenu.classList.toggle('active');
                });
            });

            // Handle category toggles in megamenu
            document.querySelectorAll('[data-category]').forEach(header => {
                header.addEventListener('click', function() {
                    const categoryId = this.getAttribute('data-category') + '-content';
                    const content = document.getElementById(categoryId);
                    const parentCategory = this.closest('.mobile-megamenu-category');
                    
                    // Toggle category content
                    parentCategory.classList.toggle('active');
                    content.classList.toggle('active');
                });
            });

            // Close menu when clicking on regular links
            document.querySelectorAll('.mobile-nav-link:not([data-submenu]):not([data-megamenu]), .mobile-submenu-link, .mobile-category-link').forEach(link => {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                });
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 992) {
                    closeMobileMenu();
                }
            });

            // Prevent menu close when clicking inside sidebar
            mobileSidebar.addEventListener('click', function(e) {
                e.stopPropagation();
            });
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
            $('#baner-right').click(function() {
                articlesCarousel.trigger('prev.owl.carousel');
            });
            
            $('#baner-left').click(function() {
                articlesCarousel.trigger('next.owl.carousel');
            });
        });
        $(document).ready(function(){
            $('#gallery-owl').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                // nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                // navText: ['‹', '›'],
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
          $("#galery-right").click(function () {
    $("#gallery-owl").trigger("prev.owl.carousel");
  });
  
  $("#galery-left").click(function () {
    $("#gallery-owl").trigger("next.owl.carousel");
  });
           $(document).ready(function(){
            $('#glory-owl-one').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                
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
            $("#glori-right").click(function () {
    $("#glory-owl-one").trigger("prev.owl.carousel");
  });
  
  $("#glori-left").click(function () {
    $("#glory-owl-one").trigger("next.owl.carousel");
  });
         $(document).ready(function(){
            $('#glory-owl-two').owlCarousel({
                rtl:true,
                loop: true,
                margin: 5,
                
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
                $("#glori-right-two").click(function () {
    $("#glory-owl-two").trigger("prev.owl.carousel");
  });
  
  $("#glori-left-two").click(function () {
    $("#glory-owl-two").trigger("next.owl.carousel");
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
 function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


function animateCounter() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 20);
        
        // Add animation class
        counter.classList.add('animate');
    });
}

// Intersection Observer for triggering animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing when DOM is loaded
$(document).ready(function() {
    const counterContainer = document.querySelector('.counter-container');
    if (counterContainer) {
        observer.observe(counterContainer);
    }
    
    // Fallback: trigger animation after 2 seconds if intersection observer doesn't work
    setTimeout(() => {
        const counters = document.querySelectorAll('.counter-number');
        if (counters.length > 0 && counters[0].textContent === '0') {
            animateCounter();
        }
    }, 2000);
});