// Loading Screen Controller
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Check if this is the first visit in the session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    // If loading screen exists and it's the first visit, show the animation
    if (loadingScreen && !hasVisited) {
        const loadingText = document.getElementById('loadingText');
        
        // Mark that the user has visited in this session
        sessionStorage.setItem('hasVisited', 'true');
        
        const text = "Karnav Chandan";
        
        // Split the text into individual characters
        const characters = text.split('');
        
        // Clear the loading text element
        loadingText.innerHTML = '';
        
        // Add each character with a delay
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
            span.classList.add('letter');
            span.style.animationDelay = `${index * 0.2}s`;
            loadingText.appendChild(span);
        });
        
        // Hide loading screen after animation completes
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 3000); // 3 seconds total loading time
    } else if (loadingScreen) {
        // If not first visit, hide loading screen immediately
        loadingScreen.classList.add('hidden');
    }
    
    // Rest of your existing JavaScript code...
    // (Mobile menu toggle, scroll animations, floating figures, etc.)
});







// Mobile menu toggle (existing code)
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  document.addEventListener('click', function (event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // NEW: Scroll animations for About section
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Elements to animate
  const animateElements = document.querySelectorAll('.about-img, .about-text h3, .about-text p, .about-info, .about-text .cta-btn');

  animateElements.forEach(el => {
    observer.observe(el);
  });
});


// Holographic Services Section
document.addEventListener('DOMContentLoaded', function() {
    // Service data
    const services = [
        {
            title: "Website Development",
            description: "Fast, responsive, and fully SEO-optimized Google Sites that help your business stand out in the digital landscape.",
            tech: ["HTML", "CSS", "JavaScript", "SEO"]
        },
        {
            title: "SEO Optimization & Ranking",
            description: "Appear in top search results for local searches in Nawada and Bihar with proven SEO strategies.",
            tech: ["Keyword Research", "On-Page SEO", "Local SEO", "Analytics"]
        },
        {
            title: "Local Business Listings",
            description: "Get listed on Google Maps and other local directories to attract more local clients to your business.",
            tech: ["Google My Business", "Local Citations", "Reviews", "Maps Optimization"]
        },
        {
            title: "Social Media Branding",
            description: "Setup and optimize Instagram, Facebook, X for your business to increase engagement and reach.",
            tech: ["Profile Setup", "Content Strategy", "Engagement", "Growth Hacking"]
        },
        {
            title: "Website Traffic Boost",
            description: "Optional traffic increase using safe, tested methods that comply with search engine guidelines.",
            tech: ["Analytics", "SEO", "Content Marketing", "Paid Ads"]
        },
        {
            title: "Custom Domain Setup",
            description: "Affordable setup with extended pages that give your business a professional online presence.",
            tech: ["Domain Registration", "DNS Configuration", "Hosting", "SSL Security"]
        }
    ];
    
    // Update service detail panel on hover
    const holoCards = document.querySelectorAll('.holo-card');
    const detailPanel = document.querySelector('.detail-content');
    
    holoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const serviceIndex = parseInt(this.dataset.service);
            const service = services[serviceIndex];
            
            // Create tech tags HTML
            const techTags = service.tech.map(tech => `<span>${tech}</span>`).join('');
            
            // Update detail panel
            detailPanel.innerHTML = `
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="holo-tech" style="margin-top: 20px; justify-content: center;">
                    ${techTags}
                </div>
            `;
        });
    });
    
    // Scroll animation for holographic container
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    const holoContainer = document.querySelector('.holographic-container');
    if (holoContainer) {
        observer.observe(holoContainer);
    }
});



// Why Choose Me Section Animation
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation for benefits container
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    const benefitsContainer = document.querySelector('.benefits-container');
    if (benefitsContainer) {
        observer.observe(benefitsContainer);
    }
    
    // Add pulse animation to central benefit
    const centralBenefit = document.querySelector('.central-benefit');
    if (centralBenefit) {
        setInterval(() => {
            centralBenefit.style.boxShadow = '0 10px 30px rgba(255, 0, 62, 0.2)';
            setTimeout(() => {
                centralBenefit.style.boxShadow = '0 15px 40px rgba(255, 0, 62, 0.3)';
            }, 1000);
        }, 3000);
    }
});

// Animated Figures Interaction
document.addEventListener('DOMContentLoaded', function() {
    const figures = document.querySelectorAll('.figure');
    
    // Add mouse interaction
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        figures.forEach((figure, index) => {
            const speed = (index + 1) * 0.5;
            const xOffset = (x - 0.5) * speed * 20;
            const yOffset = (y - 0.5) * speed * 20;
            
            figure.style.transform += ` translate(${xOffset}px, ${yOffset}px)`;
        });
    });
    
    // Add click interaction to robots
    const robots = document.querySelectorAll('.robot');
    robots.forEach(robot => {
        robot.addEventListener('click', () => {
            robot.style.animation = 'none';
            setTimeout(() => {
                robot.style.animation = 'floatRobot 2s ease-in-out';
            }, 10);
        });
    });
});

// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add glow effect to social links on hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.textShadow = '0 0 20px rgba(255, 0, 62, 1), 0 0 30px rgba(255, 0, 62, 0.8)';
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.textShadow = '0 0 10px rgba(255, 0, 62, 0.6)';
        });
    });
});