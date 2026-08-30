// ===================================
// Portfolio JavaScript - Peter Caleb Ayertey
// Optional enhancements and interactions
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Experience Tab Switching
    // ===================================
    const experienceTabs = document.querySelectorAll('.experience-tab');
    const experienceContents = document.querySelectorAll('.experience-content');
    
    experienceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCompany = this.getAttribute('data-company');
            
            // Remove active class from all tabs
            experienceTabs.forEach(t => t.classList.remove('tab-active'));
            
            // Add active class to clicked tab
            this.classList.add('tab-active');
            
            // Hide all content sections
            experienceContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show target content
            document.getElementById(targetCompany).classList.remove('hidden');
        });
    });
    
    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-amber-500');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-amber-500');
                }
            }
        });
    }
    
    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(highlightNavOnScroll);
    });
    
    // ===================================
    // Intersection Observer for Scroll Animations
    // (Alternative to CSS animations for better control)
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections (optional - already have CSS animations)
    // Uncomment if you want more control over when animations trigger
    /*
    const animatedElements = document.querySelectorAll('section');
    animatedElements.forEach(el => observer.observe(el));
    */
    
    // ===================================
    // Console Message (Easter Egg for Developers)
    // ===================================
    console.log('%c👋 Hey there, fellow developer!', 'color: #f59e0b; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repo!', 'color: #94a3b8; font-size: 12px;');
    console.log('%chttps://github.com/ayertey01', 'color: #f59e0b; font-size: 12px;');
    
    // ===================================
    // Copy Email to Clipboard (Optional Enhancement)
    // ===================================
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        // Add a small copy icon or tooltip on hover (optional)
        link.setAttribute('title', 'Click to email or right-click to copy');
    });
    
    // ===================================
    // External Links Open in New Tab
    // (Already handled in HTML with target="_blank", but good practice)
    // ===================================
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        // Add rel attributes for security
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ===================================
    // Mobile Menu Toggle (if you add hamburger menu later)
    // ===================================
    // Placeholder for future mobile menu functionality
    // Currently nav is simple enough to not need a hamburger
    
});

// ===================================
// Performance: Log Page Load Time
// ===================================
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #10b981; font-size: 12px;');
});
