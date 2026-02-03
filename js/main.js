// ============================================
// Main JavaScript for Bhagavathi Sri Venkatamba Temple
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Temple website loaded successfully');
    
    // Initialize all modules
    initMobileMenu();
    initImageSlider();
    initDonationModal();
    initContactForm();
    initSmoothScrolling();
    initCurrentYear();
    
    console.log('All modules initialized');
});

// ============================================
// 1. Mobile Menu Functionality
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const menuOverlay = document.getElementById('menuOverlay');
    
    // Open mobile menu
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        });
    }
    
    // Close mobile menu
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }
    
    // Close menu when clicking overlay
    if (menuOverlay && mobileMenu) {
        menuOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }
    
    // Close menu when clicking mobile menu links
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    });
}

// ============================================
// 2. Image Slider Functionality
// ============================================
function initImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Auto slide every 5 seconds
    const slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        hero.addEventListener('mouseleave', () => {
            setInterval(nextSlide, 5000);
        });
    }
    
    // Show first slide
    showSlide(0);
}

// ============================================
// 3. DONATION MODAL - SIMPLE & WORKING VERSION
// ============================================
function initDonationModal() {
    console.log('Initializing donation modal...');
    
    // Get modal elements
    const donationModal = document.getElementById('donationModal');
    const closeModalBtn = document.getElementById('closeDonationModal');
    const backBtn = document.getElementById('donationBackBtn');
    
    // Function to open modal
    function openDonationModal() {
        console.log('Opening donation modal');
        if (donationModal) {
            donationModal.style.display = 'flex';
            document.body.classList.add('modal-open');
            
            // Reset to UPI panel
            setTimeout(() => {
                const upiBtn = document.querySelector('[data-panel="upi"]');
                if (upiBtn) upiBtn.click();
            }, 100);
        } else {
            console.error('Donation modal not found!');
            alert('Donation system is currently unavailable. Please try again later.');
        }
    }
    
    // Function to close modal
    function closeDonationModal() {
        console.log('Closing donation modal');
        if (donationModal) {
            donationModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }
    
    // Get ALL donate buttons and attach event listeners
    const donateButtons = [
        document.getElementById('donateBtn'),
        document.getElementById('homeDonateBtn'),
        document.getElementById('mobileDonateBtn')
    ];
    
    donateButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Donate button clicked:', this.id);
                openDonationModal();
            });
        }
    });
    
    // Also attach to any other donate buttons (fallback)
    document.querySelectorAll('.donate-btn').forEach(button => {
        if (!button.id || button.id === '') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Generic donate button clicked');
                openDonationModal();
            });
        }
    });
    
    // Close modal events
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeDonationModal);
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', closeDonationModal);
    }
    
    // Close when clicking outside modal
    if (donationModal) {
        donationModal.addEventListener('click', function(e) {
            if (e.target === donationModal) {
                closeDonationModal();
            }
        });
    }
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && donationModal.style.display === 'flex') {
            closeDonationModal();
        }
    });
    
    // Initialize donation modal components
    initDonationPanels();
    initAmountSelection();
    initUpiPayment();
    initCopyButtons();
    initNetBanking();
    
    console.log('Donation modal initialized successfully');
}

// Initialize donation option panels
function initDonationPanels() {
    const optionButtons = document.querySelectorAll('.donation-option-btn');
    const panels = {
        upi: document.getElementById('upiPanel'),
        bank: document.getElementById('bankPanel'),
        netbanking: document.getElementById('netbankingPanel')
    };
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const panelName = this.getAttribute('data-panel');
            
            // Remove active class from all buttons
            optionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all panels
            Object.values(panels).forEach(panel => {
                if (panel) panel.style.display = 'none';
            });
            
            // Show selected panel
            if (panels[panelName]) {
                panels[panelName].style.display = 'block';
            }
            
            console.log('Switched to panel:', panelName);
        });
    });
}

// Initialize amount selection
function initAmountSelection() {
    const amountButtons = document.querySelectorAll('.donation-amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Clear custom amount
            if (customAmountInput) {
                customAmountInput.value = '';
            }
            
            console.log('Selected amount:', this.getAttribute('data-amount'));
        });
    });
    
    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            if (this.value) {
                // Remove active class from preset buttons
                amountButtons.forEach(btn => btn.classList.remove('active'));
            }
        });
    }
}

// Get selected amount
function getSelectedAmount() {
    const activeBtn = document.querySelector('.donation-amount-btn.active');
    const customAmountInput = document.getElementById('customAmount');
    
    if (activeBtn) {
        return activeBtn.getAttribute('data-amount');
    } else if (customAmountInput && customAmountInput.value) {
        return customAmountInput.value;
    }
    
    return '501'; // Default amount
}

// Initialize UPI payment
function initUpiPayment() {
    const payPhonePeBtn = document.getElementById('payPhonePe');
    const payAnyUpiBtn = document.getElementById('payAnyUpi');
    
    // Function to show toast
    function showToast(message) {
        const toast = document.getElementById('donationToast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
    
    // Function to build UPI URL
    function buildUpiUrl(amount) {
        const upiId = 'omsrivenkatamba@upi';
        const payeeName = 'Bhagavathi Sri Venkatamba Temple';
        
        return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&tn=Temple Donation&cu=INR`;
    }
    
    // Function to build PhonePe URL
    function buildPhonePeUrl(amount) {
        const upiId = 'omsrivenkatamba@upi';
        const payeeName = 'Bhagavathi Sri Venkatamba Temple';
        
        return `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&tn=Temple Donation&cu=INR`;
    }
    
    // Check if mobile device
    function isMobileDevice() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    
    // PhonePe button
    if (payPhonePeBtn) {
        payPhonePeBtn.addEventListener('click', function() {
            const amount = getSelectedAmount();
            if (!amount || amount < 1) {
                showToast('Please select or enter an amount');
                return;
            }
            
            if (!isMobileDevice()) {
                showToast('PhonePe works on mobile devices. Please scan QR code on desktop.');
                return;
            }
            
            const phonePeUrl = buildPhonePeUrl(amount);
            showToast('Opening PhonePe...');
            
            // Try to open PhonePe
            window.location.href = phonePeUrl;
            
            // Fallback after 1 second
            setTimeout(() => {
                const upiUrl = buildUpiUrl(amount);
                window.location.href = upiUrl;
            }, 1000);
        });
    }
    
    // Any UPI button
    if (payAnyUpiBtn) {
        payAnyUpiBtn.addEventListener('click', function() {
            const amount = getSelectedAmount();
            if (!amount || amount < 1) {
                showToast('Please select or enter an amount');
                return;
            }
            
            if (!isMobileDevice()) {
                showToast('UPI apps work on mobile. Please scan QR code on desktop.');
                return;
            }
            
            const upiUrl = buildUpiUrl(amount);
            showToast('Opening UPI app...');
            window.location.href = upiUrl;
        });
    }
}

// Initialize copy buttons
function initCopyButtons() {
    // Copy UPI ID
    const copyUpiBtn = document.getElementById('copyUpi');
    if (copyUpiBtn) {
        copyUpiBtn.addEventListener('click', function() {
            copyToClipboard('omsrivenkatamba@upi', 'UPI ID copied to clipboard!');
        });
    }
    
    // Copy Account Number
    const copyAccountBtn = document.getElementById('copyAccount');
    if (copyAccountBtn) {
        copyAccountBtn.addEventListener('click', function() {
            copyToClipboard('6866890630', 'Account number copied!');
        });
    }
    
    // Copy IFSC Code
    const copyIfscBtn = document.getElementById('copyIfsc');
    if (copyIfscBtn) {
        copyIfscBtn.addEventListener('click', function() {
            copyToClipboard('IDIB000N127', 'IFSC code copied!');
        });
    }
    
    // Copy to clipboard helper
    function copyToClipboard(text, successMessage) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMessage || 'Copied to clipboard!');
        }).catch(err => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast(successMessage || 'Copied to clipboard!');
        });
    }
    
    // Toast function
    function showToast(message) {
        const toast = document.getElementById('donationToast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
}

// Initialize NetBanking
function initNetBanking() {
    const openNetbankingBtn = document.getElementById('openNetbanking');
    const bankSelect = document.getElementById('bankSelect');
    
    if (openNetbankingBtn && bankSelect) {
        openNetbankingBtn.addEventListener('click', function() {
            const selectedBank = bankSelect.value;
            
            if (!selectedBank) {
                showToast('Please select your bank first');
                return;
            }
            
            // Map bank codes to search queries
            const bankQueries = {
                sbi: 'State Bank of India netbanking login',
                hdfc: 'HDFC Bank netbanking login',
                icici: 'ICICI Bank netbanking login',
                axis: 'Axis Bank netbanking login',
                kotak: 'Kotak Mahindra Bank netbanking login'
            };
            
            const query = bankQueries[selectedBank] || 'netbanking login';
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            
            window.open(searchUrl, '_blank');
            showToast('Opening netbanking page...');
        });
    }
}

// ============================================
// 4. Contact Form Handling
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Prepare form data
        const formData = new FormData(this);
        
        try {
            // Send to Formspree
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                const formMessage = document.getElementById('formMessage');
                if (formMessage) {
                    formMessage.style.display = 'block';
                    formMessage.innerHTML = `
                        <div style="padding: 15px; border-radius: 5px; background: #d4edda; color: #155724; border: 1px solid #c3e6cb;">
                            <i class="fas fa-check-circle" style="margin-right: 10px; color: #28a745;"></i>
                            <strong>Message Sent Successfully!</strong><br>
                            Thank you ${name}! We will contact you soon.
                        </div>
                    `;
                }
                
                // Reset form
                this.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    if (formMessage) formMessage.style.display = 'none';
                }, 5000);
                
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            // Error handling
            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
                formMessage.style.display = 'block';
                formMessage.innerHTML = `
                    <div style="padding: 15px; border-radius: 5px; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
                        <i class="fas fa-exclamation-circle" style="margin-right: 10px; color: #dc3545;"></i>
                        <strong>Error Sending Message!</strong><br>
                        Please try again or contact us directly.
                    </div>
                `;
            }
            
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ============================================
// 5. Smooth Scrolling
// ============================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    const menuOverlay = document.getElementById('menuOverlay');
                    if (mobileMenu && menuOverlay) {
                        mobileMenu.classList.remove('active');
                        menuOverlay.classList.remove('active');
                        document.body.classList.remove('modal-open');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// 6. Current Year in Footer
// ============================================
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// 7. Export functions for testing
// ============================================
window.openDonationModal = openDonationModal;
window.closeDonationModal = closeDonationModal;
window.testDonation = function() {
    console.log('Testing donation system...');
    openDonationModal();
};
