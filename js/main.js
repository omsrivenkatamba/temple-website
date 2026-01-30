// Premium Temple Website - Enhanced Main JavaScript
// =================================================

// Configuration
const CONFIG = {
    github: {
        username: 'omsrivenkatamba',
        repo: 'temple-website',
        branch: 'main'
    },
    site: {
        name: 'Bhagavathi Sri Venkatamba Temple',
        email: 'omsrivenkatamba@gmail.com',
        phone: '+91 8309 545 660',
        whatsapp: '+1 425 326 7715',
        address: 'Karaballavolu Village, Ozili Mandal, Nellore District - 524401, Andhra Pradesh'
    },
    social: {
        youtube: 'https://www.youtube.com/watch?v=N1EOF1RwuO4',
        facebook: 'https://www.facebook.com/BhagavathiSriVenkatamba',
        email: 'mailto:omsrivenkatamba@gmail.com',
        instagram: 'https://www.instagram.com'
    }
};

// Premium 3D Animation Variables
const ANIMATION_SETTINGS = {
    slideInterval: 6000,
    floatAnimation: 4000,
    glowAnimation: 2500,
    parallaxStrength: 0.5,
    hoverScale: 1.05,
    hoverLift: 8,
    cardRotation: 10
};

// Get GitHub base URL for images
const GITHUB_BASE_URL = `https://raw.githubusercontent.com/${CONFIG.github.username}/${CONFIG.github.repo}/${CONFIG.github.branch}/images`;

// Premium Slider Photos with Descriptions
const SLIDER_PHOTOS = [
    { 
        filename: '01-main-slide1.jpg', 
        title: 'శ్రీ వేంకటాంబ మందిరం',
        description: 'Experience Divine Blessings at Sri Venkatamba Temple',
        overlay: 'rgba(0, 0, 0, 0.7)'
    },
    { 
        filename: '01-main-slide2.jpg', 
        title: 'Divine Architecture',
        description: 'Sacred Architecture Inspired by Ancient Traditions',
        overlay: 'rgba(124, 45, 18, 0.6)'
    },
    { 
        filename: '01-main-slide3.jpg', 
        title: 'Spiritual Atmosphere',
        description: 'Find Peace and Serenity in Our Temple Premises',
        overlay: 'rgba(91, 33, 12, 0.65)'
    },
    { 
        filename: '01-main-slide4.jpg', 
        title: 'Community Service',
        description: 'Serving Humanity with Love and Devotion',
        overlay: 'rgba(67, 20, 7, 0.7)'
    },
    { 
        filename: '01-main-slide5.jpg', 
        title: 'Cultural Heritage',
        description: 'Preserving Ancient Traditions and Rituals',
        overlay: 'rgba(178, 34, 34, 0.6)'
    }
];

// Premium Services Data
const PREMIUM_SERVICES = [
    {
        id: 1,
        title: 'Eye Camp',
        description: 'Free eye checkup camps and distribution of glasses to the needy in rural areas. Regular cataract surgery camps.',
        icon: 'fas fa-eye',
        image: 'Eye-Camp-Image02.jpg',
        color: 'var(--gold-gradient)',
        stats: '5000+ People Served'
    },
    {
        id: 2,
        title: 'Annadanam',
        description: 'Free food distribution to devotees and needy people as a service to humanity. Daily prasadam distribution.',
        icon: 'fas fa-utensils',
        image: 'annadanam-2.jpg',
        color: 'var(--red-gradient)',
        stats: '1000+ Meals Daily'
    },
    {
        id: 3,
        title: 'Go Seva',
        description: 'Care and protection of cows, considered sacred in Hindu tradition. Gaushala maintenance and medical care.',
        icon: 'fas fa-paw',
        image: 'Go-Seva-Image-01.jpg',
        color: 'var(--maroon-gradient)',
        stats: '50+ Cows Protected'
    },
    {
        id: 4,
        title: 'Medical Camps',
        description: 'Free health checkup camps in rural areas with distribution of medicines. Specialist doctor consultations.',
        icon: 'fas fa-stethoscope',
        image: 'Medical-Camp-Image-01.jpg',
        color: 'var(--gold-gradient)',
        stats: '2000+ Patients Treated'
    },
    {
        id: 5,
        title: 'Summer Chalivendra',
        description: 'Providing buttermilk and water to people during hot summer months. Hydration stations across village.',
        icon: 'fas fa-glass-water',
        image: 'Summer_Chalivendra.jpg',
        color: 'var(--red-gradient)',
        stats: '24/7 Service in Summer'
    }
];

// Premium Activities Data
const PREMIUM_ACTIVITIES = [
    {
        id: 1,
        title: 'Daily Morning Puja',
        date: 'Every Day',
        description: 'Suprabhata Seva and morning rituals performed daily at the temple. Experience divine blessings.',
        icon: 'fas fa-pray',
        image: '01-main-slide6.jpg',
        type: 'spiritual'
    },
    {
        id: 2,
        title: 'Mass Annadanam',
        date: 'May 28, 2023',
        description: 'Free food distribution to over 500 devotees during temple festival. Serving humanity with devotion.',
        icon: 'fas fa-utensils',
        image: 'annadanam-2.jpg',
        type: 'service'
    },
    {
        id: 3,
        title: 'Medical Camp in Karaballavolu',
        date: 'April 10, 2023',
        description: 'Free health camp organized for villagers with specialist doctors. Complete health checkups provided.',
        icon: 'fas fa-heartbeat',
        image: 'Medical-Camp-Image-01.jpg',
        type: 'service'
    }
];

// Premium Committee Members
const PREMIUM_COMMITTEE = [
    {
        id: 1,
        name: 'శ్రీ వటుకనాధుల వారు',
        position: 'ఫౌండర్',
        image: 'founder.jpg',
        description: 'Spiritual Guide and Founder',
        priority: 1
    },
    {
        id: 2,
        name: 'శ్రీ యెల్లా సురేష్ రెడ్డి',
        position: 'చైర్మన్',
        image: 'Chairman.jpg',
        description: 'Chairman - Temple Committee',
        priority: 2
    },
    {
        id: 3,
        name: 'శ్రీ నెల్లూరు సుబ్బారావు',
        position: 'వైస్ చైర్మన్',
        image: 'ViceChairman.jpg',
        description: 'Vice Chairman - Temple Committee',
        priority: 3
    },
    {
        id: 4,
        name: 'శ్రీ ముమ్ముడి రామయ్య',
        position: 'సెక్రటరీ',
        image: 'Secratary.jpg',
        description: 'Secretary - Temple Committee',
        priority: 4
    },
    {
        id: 5,
        name: 'శ్రీ కోటంరెడ్డి పరంధామ రెడ్డి',
        position: 'జాయింట్ సెక్రటరీ',
        image: 'JointSecratary.jpg',
        description: 'Joint Secretary - Temple Committee',
        priority: 5
    },
    {
        id: 6,
        name: 'శ్రీ గెరికి బలరామయ్య',
        position: 'ట్రెసరర్',
        image: 'Treasurer.jpg',
        description: 'Treasurer - Temple Committee',
        priority: 6
    }
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🌟 Bhagavathi Sri Venkatamba Temple 🌟', 
        'color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    
    initializePremiumFeatures();
    loadHeroSlider();
    loadServices();
    loadActivities();
    loadCommittee();
    initMobileMenu();
    initDonationModal();
    initSmoothScrolling();
    initContactForm();
    initParallaxEffects();
    initPremiumAnimations();
    initImageHoverEffects();
    initFormValidation();
    initPageLoader();
});

// Initialize Premium Features
function initializePremiumFeatures() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Add loading animation to buttons
    addButtonAnimations();
    
    // Initialize counters
    initCounters();
    
    // Add scroll animations
    initScrollAnimations();
}

// Premium Hero Slider with 3D Effects
function loadHeroSlider() {
    const slider = document.getElementById('homeSlider');
    if (!slider) return;
    
    slider.innerHTML = '';
    
    SLIDER_PHOTOS.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `linear-gradient(${photo.overlay}, ${photo.overlay}), url('${GITHUB_BASE_URL}/01-main-slide/${photo.filename}')`;
        slide.style.transform = `translateZ(${index * 10}px)`;
        slide.innerHTML = `
            <div class="slide-content animate__animated animate__fadeInUp">
                <h2>${photo.title}</h2>
                <p>${photo.description}</p>
                <div class="slide-indicator">
                    <div class="indicator-dot ${index === 0 ? 'active' : ''}"></div>
                </div>
            </div>
        `;
        slider.appendChild(slide);
    });
    
    // Auto slide functionality with premium effects
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Reset all slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.transform = `translateX(${100 * (i - index)}%) translateZ(-50px)`;
            
            // Reset indicator
            const indicator = slide.querySelector('.indicator-dot');
            if (indicator) indicator.classList.remove('active');
        });
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
            slides[index].style.opacity = '1';
            slides[index].style.transform = `translateX(0) translateZ(0)`;
            
            // Activate indicator
            const indicator = slides[index].querySelector('.indicator-dot');
            if (indicator) indicator.classList.add('active');
            
            // Add animation class
            const content = slides[index].querySelector('.slide-content');
            if (content) {
                content.classList.remove('animate__fadeInUp');
                void content.offsetWidth; // Trigger reflow
                content.classList.add('animate__fadeInUp');
            }
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Auto slide with premium interval
    let slideInterval = setInterval(nextSlide, ANIMATION_SETTINGS.slideInterval);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
        slider.style.cursor = 'pointer';
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, ANIMATION_SETTINGS.slideInterval);
        slider.style.cursor = 'default';
    });
    
    // Add navigation arrows
    const navContainer = document.createElement('div');
    navContainer.className = 'slider-nav';
    navContainer.innerHTML = `
        <button class="slider-arrow prev-arrow">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-arrow next-arrow">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    slider.appendChild(navContainer);
    
    // Arrow event listeners
    document.querySelector('.prev-arrow')?.addEventListener('click', prevSlide);
    document.querySelector('.next-arrow')?.addEventListener('click', nextSlide);
    
    // Initialize first slide
    showSlide(currentSlide);
}

// Premium Services Loading
function loadServices() {
    const servicesContainer = document.getElementById('servicesGrid');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = '';
    
    PREMIUM_SERVICES.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card premium-card';
        serviceCard.setAttribute('data-service', service.id);
        serviceCard.style.setProperty('--card-color', service.color);
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-image">
                <img src="${GITHUB_BASE_URL}/01-main-slide/${service.image}" 
                     alt="${service.title}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x250/FFF8E7/7C2D12?text=${service.title}'">
                <div class="service-overlay"></div>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-stats">
                    <i class="fas fa-chart-line"></i>
                    <span>${service.stats}</span>
                </div>
                <a href="#service-${service.id}" class="read-more premium-link">
                    Learn More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
            <div class="card-glow"></div>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });
    
    // Add hover effects to service cards
    addCardHoverEffects('.service-card');
}

// Premium Activities Loading
function loadActivities() {
    const activitiesContainer = document.getElementById('activitiesGrid');
    if (!activitiesContainer) return;
    
    activitiesContainer.innerHTML = '';
    
    PREMIUM_ACTIVITIES.forEach(activity => {
        const activityCard = document.createElement('div');
        activityCard.className = `activity-card premium-card ${activity.type}`;
        activityCard.setAttribute('data-activity', activity.id);
        
        activityCard.innerHTML = `
            <div class="activity-badge">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-image">
                <img src="${GITHUB_BASE_URL}/01-main-slide/${activity.image}" 
                     alt="${activity.title}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/FFF8E7/7C2D12?text=${activity.title}'">
                <div class="activity-date">
                    <i class="far fa-calendar-alt"></i>
                    <span>${activity.date}</span>
                </div>
            </div>
            <div class="activity-content">
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
                <div class="activity-actions">
                    <button class="action-btn view-details" data-id="${activity.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <a href="${CONFIG.social.youtube}" target="_blank" class="action-btn watch-video">
                        <i class="fab fa-youtube"></i> Watch
                    </a>
                </div>
            </div>
        `;
        
        activitiesContainer.appendChild(activityCard);
    });
    
    // Add click handlers for activity details
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const activityId = this.getAttribute('data-id');
            showActivityDetails(activityId);
        });
    });
}

// Premium Committee Loading
function loadCommittee() {
    const committeeContainer = document.getElementById('committeeGrid');
    if (!committeeContainer) return;
    
    committeeContainer.innerHTML = '';
    
    // Sort by priority
    const sortedCommittee = [...PREMIUM_COMMITTEE].sort((a, b) => a.priority - b.priority);
    
    sortedCommittee.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'committee-card premium-card';
        memberCard.setAttribute('data-member', member.id);
        
        memberCard.innerHTML = `
            <div class="committee-image">
                <img src="${GITHUB_BASE_URL}/05-community-team/${member.image}" 
                     alt="${member.name}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400/FFF8E7/7C2D12?text=${member.name}'">
                <div class="member-overlay">
                    <div class="member-info">
                        <p class="member-description">${member.description}</p>
                    </div>
                </div>
            </div>
            <div class="committee-info">
                <h4 class="telugu-text">${member.name}</h4>
                <div class="position">${member.position}</div>
                <div class="member-contact">
                    <i class="fas fa-phone-alt"></i>
                    <span>Contact Committee</span>
                </div>
            </div>
            <div class="member-floating">
                <i class="fas fa-user-circle"></i>
            </div>
        `;
        
        committeeContainer.appendChild(memberCard);
    });
    
    // Add member card interactions
    addMemberCardInteractions();
}

// Premium Mobile Menu with 3D Effects
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    // Create mobile menu if it doesn't exist
    if (!mobileMenu) {
        createMobileMenu();
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (mobileMenu) mobileMenu.classList.toggle('active');
            if (menuOverlay) menuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu?.classList.contains('active') ? 'hidden' : '';
            
            // Add animation
            if (mobileMenu?.classList.contains('active')) {
                animateMobileMenu();
            }
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function createMobileMenu() {
    const mobileMenuHTML = `
        <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
        <div class="mobile-menu-container" id="mobileMenu">
            <div class="mobile-menu-header">
                <div class="mobile-logo">
                    <i class="fas fa-om"></i>
                    <span>శ్రీ వేంకటాంబ</span>
                </div>
                <button class="mobile-menu-close" id="mobileMenuClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="mobile-menu-content">
                <nav class="mobile-nav">
                    <a href="#home" class="mobile-nav-link">
                        <i class="fas fa-home"></i> Home
                    </a>
                    <a href="#about" class="mobile-nav-link">
                        <i class="fas fa-info-circle"></i> About
                    </a>
                    <a href="#services" class="mobile-nav-link">
                        <i class="fas fa-hands-helping"></i> Services
                    </a>
                    <a href="#activities" class="mobile-nav-link">
                        <i class="fas fa-calendar-alt"></i> Activities
                    </a>
                    <a href="#committee" class="mobile-nav-link">
                        <i class="fas fa-users"></i> Committee
                    </a>
                    <a href="#contact" class="mobile-nav-link">
                        <i class="fas fa-envelope"></i> Contact
                    </a>
                    <button class="mobile-donate-btn donate-btn">
                        <i class="fas fa-hand-holding-heart"></i> Donate Now
                    </button>
                </nav>
                <div class="mobile-social">
                    <a href="${CONFIG.social.youtube}" target="_blank" class="mobile-social-link">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="${CONFIG.social.facebook}" target="_blank" class="mobile-social-link">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="${CONFIG.social.email}" class="mobile-social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="${CONFIG.social.instagram}" target="_blank" class="mobile-social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
}

function animateMobileMenu() {
    const links = document.querySelectorAll('.mobile-nav-link');
    links.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('animate__animated', 'animate__fadeInLeft');
    });
}

function closeMobileMenu() {
    document.getElementById('mobileMenuBtn')?.classList.remove('active');
    document.getElementById('mobileMenu')?.classList.remove('active');
    document.getElementById('mobileMenuOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
}

// Premium Donation Modal
function initDonationModal() {
    const donateButtons = [
        document.getElementById('donateBtn'),
        document.getElementById('homeDonateBtn'),
        document.querySelector('.mobile-donate-btn')
    ];
    
    const donationModal = document.getElementById('donationModal');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    function openModal() {
        if (donationModal) {
            donationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Add entrance animation
            donationModal.classList.add('modal-enter');
            setTimeout(() => {
                donationModal.classList.remove('modal-enter');
                donationModal.classList.add('modal-active');
            }, 10);
        }
    }
    
    function closeModalFunc() {
        if (donationModal) {
            donationModal.classList.remove('modal-active');
            donationModal.classList.add('modal-exit');
            
            setTimeout(() => {
                donationModal.style.display = 'none';
                donationModal.classList.remove('modal-exit');
                document.body.style.overflow = '';
            }, 300);
        }
    }
    
    // Add event listeners to all donate buttons
    donateButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', openModal);
        }
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModalFunc);
    }
    
    // Close modal when clicking outside
    if (donationModal) {
        donationModal.addEventListener('click', (e) => {
            if (e.target === donationModal) {
                closeModalFunc();
            }
        });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && donationModal.style.display === 'flex') {
            closeModalFunc();
        }
    });
    
    // Add QR code scanning simulation
    initQRCodeScanner();
}

// Premium Smooth Scrolling
function initSmoothScrolling() {
    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 100;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href === '#' || href === '#!' || href.includes('javascript')) return;
            
            e.preventDefault();
            
            // Close mobile menu if open
            closeMobileMenu();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Premium smooth scroll with easing
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Add active class to nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', throttle(updateActiveNavOnScroll, 100));
}

// Premium Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        if (!validateContactForm(formData)) return;
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual API endpoint)
            await simulateFormSubmission(formData);
            
            // Show success message
            showFormMessage('success', 'Message sent successfully! We will contact you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Add celebration animation
            celebrateFormSubmission();
            
        } catch (error) {
            // Show error message
            showFormMessage('error', 'Failed to send message. Please try again or contact us directly.');
            
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Add input animations
    addFormInputAnimations();
}

// Premium Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = element.dataset.rate || ANIMATION_SETTINGS.parallaxStrength;
                const movement = -(scrolled * rate);
                element.style.transform = `translate3d(0, ${movement}px, 0)`;
            });
        });
    }
}

// Premium Animations
function initPremiumAnimations() {
    // Add floating animation to elements
    document.querySelectorAll('.float-element').forEach(el => {
        el.style.animation = `float ${ANIMATION_SETTINGS.floatAnimation}ms ease-in-out infinite`;
    });
    
    // Add glow animation to elements
    document.querySelectorAll('.glow-element').forEach(el => {
        el.style.animation = `glow ${ANIMATION_SETTINGS.glowAnimation}ms ease-in-out infinite`;
    });
    
    // Initialize intersection observer for scroll animations
    initIntersectionObserver();
}

// Image Hover Effects
function initImageHoverEffects() {
    document.querySelectorAll('.premium-card img').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(1deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Form Validation
function initFormValidation() {
    const formInputs = document.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            clearValidation(this);
        });
    });
}

// Page Loader
function initPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <i class="fas fa-om"></i>
            </div>
            <div class="loader-text">
                <span class="telugu-text">శ్రీ వేంకటాంబ</span>
                <p>Loading Divine Experience...</p>
            </div>
            <div class="loader-spinner"></div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Helper Functions
function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    
    if (!data.name || data.name.length < 2) {
        showFormMessage('error', 'Please enter a valid name (minimum 2 characters)');
        return false;
    }
    
    if (!emailRegex.test(data.email)) {
        showFormMessage('error', 'Please enter a valid email address');
        return false;
    }
    
    if (!data.subject || data.subject.length < 3) {
        showFormMessage('error', 'Please enter a subject (minimum 3 characters)');
        return false;
    }
    
    if (!data.message || data.message.length < 10) {
        showFormMessage('error', 'Please enter a message (minimum 10 characters)');
        return false;
    }
    
    return true;
}

async function simulateFormSubmission(data) {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve(true);
        }, 1500);
    });
}

function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="close-message">&times;</button>
    `;
    
    // Insert after form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Add close button functionality
    messageDiv.querySelector('.close-message').addEventListener('click', function() {
        messageDiv.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.classList.add('fade-out');
            setTimeout(() => {
                if (messageDiv.parentNode) messageDiv.remove();
            }, 300);
        }
    }, 5000);
}

function validateInput(input) {
    const value = input.value.trim();
    const type = input.type;
    
    if (!value && input.hasAttribute('required')) {
        input.classList.add('invalid');
        return false;
    }
    
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            input.classList.add('invalid');
            return false;
        }
    }
    
    if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            input.classList.add('invalid');
            return false;
        }
    }
    
    input.classList.remove('invalid');
    input.classList.add('valid');
    return true;
}

function clearValidation(input) {
    input.classList.remove('invalid', 'valid');
}

function addButtonAnimations() {
    document.querySelectorAll('.donate-btn, .submit-btn, .action-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = `translateY(-${ANIMATION_SETTINGS.hoverLift}px) scale(${ANIMATION_SETTINGS.hoverScale})`;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function addCardHoverEffects(selector) {
    document.querySelectorAll(selector).forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = `translateY(-${ANIMATION_SETTINGS.hoverLift}px) rotateX(${ANIMATION_SETTINGS.cardRotation}deg)`;
            const glow = this.querySelector('.card-glow');
            if (glow) glow.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            const glow = this.querySelector('.card-glow');
            if (glow) glow.style.opacity = '0';
        });
    });
}

function addMemberCardInteractions() {
    document.querySelectorAll('.committee-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            const member = PREMIUM_COMMITTEE.find(m => m.id == memberId);
            if (member) {
                showMemberDetails(member);
            }
        });
    });
}

function showMemberDetails(member) {
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    modal.innerHTML = `
        <div class="member-modal-content">
            <button class="close-modal">&times;</button>
            <div class="member-modal-image">
                <img src="${GITHUB_BASE_URL}/05-community-team/${member.image}" 
                     alt="${member.name}">
            </div>
            <div class="member-modal-info">
                <h3 class="telugu-text">${member.name}</h3>
                <div class="member-modal-position">${member.position}</div>
                <p class="member-modal-description">${member.description}</p>
                <div class="member-modal-contact">
                    <p><i class="fas fa-phone-alt"></i> ${CONFIG.site.phone}</p>
                    <p><i class="fab fa-whatsapp"></i> ${CONFIG.site.whatsapp}</p>
                    <p><i class="fas fa-envelope"></i> ${CONFIG.site.email}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animations
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

function showActivityDetails(activityId) {
    const activity = PREMIUM_ACTIVITIES.find(a => a.id == activityId);
    if (!activity) return;
    
    const modal = document.createElement('div');
    modal.className = 'activity-modal';
    modal.innerHTML = `
        <div class="activity-modal-content">
            <button class="close-modal">&times;</button>
            <div class="activity-modal-header">
                <div class="activity-badge">
                    <i class="${activity.icon}"></i>
                </div>
                <h3>${activity.title}</h3>
                <div class="activity-date">
                    <i class="far fa-calendar-alt"></i>
                    <span>${activity.date}</span>
                </div>
            </div>
            <div class="activity-modal-body">
                <div class="activity-modal-image">
                    <img src="${GITHUB_BASE_URL}/01-main-slide/${activity.image}" 
                         alt="${activity.title}">
                </div>
                <div class="activity-modal-description">
                    <p>${activity.description}</p>
                    <div class="activity-stats">
                        <div class="stat">
                            <i class="fas fa-users"></i>
                            <span>100+ Participants</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-clock"></i>
                            <span>Full Day Event</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activity-modal-footer">
                <a href="${CONFIG.social.youtube}" target="_blank" class="action-btn">
                    <i class="fab fa-youtube"></i> Watch Gallery
                </a>
                <button class="donate-btn">
                    <i class="fas fa-hand-holding-heart"></i> Support This Activity
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function updateActiveNavLink(targetId) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current link
    const activeLink = document.querySelector(`a[href="#${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 100;
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    if (current) {
        updateActiveNavLink(current);
    }
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function initQRCodeScanner() {
    const qrCode = document.querySelector('.qr-code img');
    if (qrCode) {
        qrCode.addEventListener('click', function() {
            this.classList.toggle('scanning');
            showNotification('Scan QR Code with UPI app to donate', 'info');
        });
    }
}

function celebrateFormSubmission() {
    // Add confetti effect
    const confettiCount = 50;
    const colors = ['#FFD700', '#DC2626', '#7C2D12', '#FFFFFF'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: 50%;
            left: 50%;
            border-radius: 50%;
            z-index: 10000;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        let posX = 50;
        let posY = 50;
        
        const animate = () => {
            posX += x;
            posY += y;
            confetti.style.left = `${posX}%`;
            confetti.style.top = `${posY}%`;
            confetti.style.opacity = 1 - (posY - 50) / 50;
            
            if (posY < 100) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    // Play success sound (optional)
    // const audio = new Audio('success.mp3');
    // audio.volume = 0.3;
    // audio.play().catch(() => {});
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'info' ? 'info-circle' : type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) notification.remove();
            }, 300);
        }
    }, 5000);
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toLocaleString();
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Start counter when in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

function addFormInputAnimations() {
    const formInputs = document.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Error handling for images
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.style.border = '2px dashed #DC2626';
        e.target.style.padding = '10px';
        e.target.style.backgroundColor = '#FFF8E7';
    }
}, true);

// Initialize performance monitoring
if (typeof window.performance !== 'undefined') {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        if (loadTime > 3000) {
            console.warn('Page load time is slow. Consider optimizing images.');
        }
    });
}

// Export for debugging
window.TempleApp = {
    config: CONFIG,
    animations: ANIMATION_SETTINGS,
    services: PREMIUM_SERVICES,
    activities: PREMIUM_ACTIVITIES,
    committee: PREMIUM_COMMITTEE,
    reloadSlider: loadHeroSlider,
    showDonationModal: () => {
        const modal = document.getElementById('donationModal');
        if (modal) modal.style.display = 'flex';
    }
};

// Service Worker Registration (Optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
