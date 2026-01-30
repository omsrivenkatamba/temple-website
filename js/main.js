// Configuration for your GitHub repository
const CONFIG = {
    github: {
        username: 'omsrivenkatamba',
        repo: 'temple-website',
        branch: 'main'
    },
    site: {
        name: 'Bhagavathi Sri Venkatamba Temple',
        email: 'omsrivenkatamba@gmail.com',
        phone: '425-326-7715',
        address: 'Karaballavolu Village, Ozili Mandal, Nellore District - 524401, Andhra Pradesh'
    }
};

// Get GitHub base URL for images
const GITHUB_BASE_URL = `https://raw.githubusercontent.com/${CONFIG.github.username}/${CONFIG.github.repo}/${CONFIG.github.branch}/images`;

// Your slider photos
const SLIDER_PHOTOS = [
    { filename: '01-main-slide1.jpg', title: 'Sri Venkatamba Temple', description: 'Divine Abode of Bhagavathi Sri Venkatamba' },
    { filename: '01-main-slide2.jpg', title: 'Sacred Sanctum', description: 'Experience Divine Blessings' },
    { filename: '01-main-slide3.jpg', title: 'Spiritual Oasis', description: 'Find Peace and Serenity' },
    { filename: '01-main-slide4.jpg', title: 'Community Service', description: 'Serving Humanity with Devotion' },
    { filename: '01-main-slide5.jpg', title: 'Cultural Heritage', description: 'Preserving Ancient Traditions' }
];

// Team members data (based on your photos)
const TEAM_MEMBERS = [
    { filename: 'Chairman.jpg', name: 'Chairman', position: 'Chairman' },
    { filename: 'ViceChairman.jpg', name: 'Vice Chairman', position: 'Vice Chairman' },
    { filename: 'Secratary.jpg', name: 'Secretary', position: 'Secretary' },
    { filename: 'JointSecratary.jpg', name: 'Joint Secretary', position: 'Joint Secretary' },
    { filename: 'Treasurer.jpg', name: 'Treasurer', position: 'Treasurer' },
    { filename: 'founder.jpg', name: 'Founder', position: 'Founder' },
    { filename: 'FMTVijay.jpg', name: 'FMT Vijay', position: 'Committee Member' },
    { filename: 'MTAnkaiah.jpg', name: 'MT Ankaiah', position: 'Committee Member' },
    { filename: 'MTBasha.jpg', name: 'MT Basha', position: 'Committee Member' },
    { filename: 'MTChenchaiah.jpg', name: 'MT Chenchaiah', position: 'Committee Member' },
    { filename: 'MTKrishnaiah.jpg', name: 'MT Krishnaiah', position: 'Committee Member' },
    { filename: 'MTNagamma.jpg', name: 'MT Nagamma', position: 'Committee Member' },
    { filename: 'MTRamanaih.jpg', name: 'MT Ramanaih', position: 'Committee Member' },
    { filename: 'MTRamanayya.jpg', name: 'MT Ramanayya', position: 'Committee Member' },
    { filename: 'MTRavindra.jpg', name: 'MT Ravindra', position: 'Committee Member' }
];

// Service images (using slider photos temporarily)
const SERVICE_IMAGES = [
    '01-main-slide1.jpg',
    '01-main-slide2.jpg',
    '01-main-slide3.jpg',
    '01-main-slide4.jpg',
    '01-main-slide5.jpg'
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    loadHeroSlider();
    loadHomeContent();
    loadTeamMembers();
    loadServiceImages();
    initGallery();
    initDonationModal();
    initSmoothScrolling();
    initContactForm();
});

// Mobile menu functions
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Mobile dropdown toggles
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.toggle('active');
            
            const icon = toggle.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Load hero slider with your photos
function loadHeroSlider() {
    const slider = document.getElementById('mainSlider');
    if (!slider) return;
    
    slider.innerHTML = '';
    
    SLIDER_PHOTOS.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${GITHUB_BASE_URL}/01-main-slide/${photo.filename}')`;
        slide.innerHTML = `
            <div class="slide-content">
                <h2>${photo.title}</h2>
                <p>${photo.description}</p>
            </div>
        `;
        slider.appendChild(slide);
    });
    
    // Auto slide functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) {
            slides[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto slide every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        setInterval(nextSlide, 5000);
    });
}

// Load home page content
function loadHomeContent() {
    const homeContent = document.getElementById('homeContent');
    if (!homeContent) return;
    
    homeContent.innerHTML = `
        <div class="home-section">
            <div class="home-left">
                <h2 class="section-title">Welcome to Sri Venkatamba Temple</h2>
                
                <div class="prayer-box">
                    <div class="prayer-text telugu-text">
                        అమ్మ సంకీర్తన నామము<br>
                        శ్రీ వేంకటాంబ! శ్రీ వేంకటాంబ!<br>
                        సంకటహరాంబ! శ్రీ వేంకటాంబ!<br>
                        శ్రీ వేంకటాంబ! శ్రీ వేంకటాంబ!<br>
                        సత్కృపాగరిమాంబ! శ్రీ వేంకటాంబ!
                    </div>
                </div>
                
                <p class="telugu-text">
                    భక్తి మార్గాన్ని అందరికి ఉపదేశిస్తూ, ఆశ్రమ అభివృద్ధి చేస్తూ, 
                    ఇక్కడి కార్యక్రమాల ద్వారా భావితరాల వారికి భక్తి మార్గాన్ని ఉపదేశించాలన్న 
                    ఒక చిన్న ప్రయత్నం.
                </p>
                
                <div style="margin-top: 30px;">
                    <a href="https://www.youtube.com/watch?v=N1EOF1RwuO4" target="_blank" class="donate-btn">
                        <i class="fab fa-youtube"></i> Watch Jai Sri Venkatamba Video
                    </a>
                </div>
            </div>
            
            <div class="home-right">
                <div class="donation-box">
                    <h3>Support Our Temple Activities</h3>
                    <p>Your donations help us continue our spiritual and community services</p>
                    
                    <div class="donation-details">
                        <h4>Bank Details:</h4>
                        <p><strong>Account Name:</strong> Bhagavathi Sri Venkatamba Temple</p>
                        <p><strong>Account No:</strong> 6866890630</p>
                        <p><strong>IFSC Code:</strong> IDIB000N127</p>
                        <p><strong>Bank:</strong> Indian Bank</p>
                        <p><strong>Branch:</strong> Naidupet Branch</p>
                        
                        <div style="margin: 20px 0;">
                            <h4>UPI QR Code:</h4>
                            <div class="qr-code">
                                <img src="${GITHUB_BASE_URL}/08-other/donation-qr.jpg" 
                                     alt="Donation QR Code"
                                     onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\"padding:20px;text-align:center;\">QR Code Image</div>'">
                            </div>
                        </div>
                        
                        <p><strong>UPI ID:</strong> omsrivenkatamba@upi</p>
                    </div>
                    
                    <button class="donate-btn" id="homeDonateBtn">Donate Now</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener to home page donate button
    setTimeout(() => {
        const homeDonateBtn = document.getElementById('homeDonateBtn');
        if (homeDonateBtn) {
            homeDonateBtn.addEventListener('click', () => {
                const donationModal = document.getElementById('donationModal');
                if (donationModal) {
                    donationModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    }, 100);
}

// Load team members
function loadTeamMembers() {
    const teamContainer = document.getElementById('teamContainer');
    if (!teamContainer) return;
    
    teamContainer.innerHTML = '';
    
    TEAM_MEMBERS.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        memberDiv.innerHTML = `
            <img src="${GITHUB_BASE_URL}/05-community-team/${member.filename}" 
                 alt="${member.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/150/ffcccc/333333?text=${member.name.replace(' ', '+')}'">
            <h4>${member.name}</h4>
            <div class="position">${member.position}</div>
        `;
        teamContainer.appendChild(memberDiv);
    });
}

// Load service images
function loadServiceImages() {
    for (let i = 1; i <= 5; i++) {
        const serviceImage = document.getElementById(`service${i}`);
        if (serviceImage && SERVICE_IMAGES[i-1]) {
            serviceImage.innerHTML = `
                <img src="${GITHUB_BASE_URL}/01-main-slide/${SERVICE_IMAGES[i-1]}" 
                     alt="Service ${i}"
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\"display:flex;align-items:center;justify-content:center;height:100%;\">Service Image</div>'">
            `;
        }
    }
}

// Initialize gallery
function initGallery() {
    const gallerySection = document.querySelector('.gallery-section');
    if (!gallerySection) return;
    
    // For now, use slider photos as gallery
    const galleryPhotos = SLIDER_PHOTOS.slice(0, 6);
    
    gallerySection.innerHTML = `
        <div class="container">
            <h2 class="section-title" style="text-align: center;">Photo Gallery</h2>
            <p style="text-align: center; margin-bottom: 20px; max-width: 800px; margin-left: auto; margin-right: auto;">
                Explore moments from our temple activities and community events
            </p>
            
            <div class="gallery-container" id="photoGallery">
                ${galleryPhotos.map(photo => `
                    <div class="gallery-item">
                        <img src="${GITHUB_BASE_URL}/01-main-slide/${photo.filename}" 
                             alt="${photo.title}"
                             onerror="this.src='https://via.placeholder.com/400x300/ffcccc/333333?text=Temple+Photo'">
                        <div class="gallery-caption">
                            <h4>${photo.title}</h4>
                            <p>${photo.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <p>More photos will be added as we upload them to GitHub</p>
                <p style="font-size: 0.9rem; color: #666;">Upload photos to: images/02-temple-photos/, images/03-seva-activities/, etc.</p>
            </div>
        </div>
    `;
}

// Donation modal functions
function initDonationModal() {
    const donateBtn = document.getElementById('donateBtn');
    const donationModal = document.getElementById('donationModal');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    function openModal() {
        if (donationModal) {
            donationModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModalFunc() {
        if (donationModal) {
            donationModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    if (donateBtn) {
        donateBtn.addEventListener('click', openModal);
    }
    
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
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && !href.includes('mailto:') && !href.includes('http')) {
                e.preventDefault();
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                const menuOverlay = document.getElementById('menuOverlay');
                if (mobileMenu && menuOverlay) {
                    mobileMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !phone) {
            alert('Please fill in all required fields: Name, Email, and Phone');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For now, just show a success message
        alert(`Thank you ${name}! Your message has been received.\nWe will contact you at ${email} or ${phone} soon.`);
        
        // Reset form
        contactForm.reset();
        
        // Scroll to top of contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            window.scrollTo({
                top: contactSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
}

// Handle image errors
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        // You could set a placeholder image here
    }
}, true);

// Initialize on window load
window.addEventListener('load', function() {
    // Check if all images loaded properly
    console.log('Website loaded successfully');
    
    // Set current year in footer (optional)
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', currentYear);
    }
});
