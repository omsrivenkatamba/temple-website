// ============================================
// Main JavaScript for Bhagavathi Sri Venkatamba Temple
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
    
    // Initialize all modules
    initMobileMenu();
    initImageSlider();
    initDonationModal();
    initContactForm();
    initSmoothScrolling();
    initCommitteeCards();
});

// ============================================
// 1. Mobile Menu Functionality
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    // Open mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking overlay
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
            
            // Toggle chevron icon
            const icon = toggle.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
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
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
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
}

// ============================================
// 3. Donation Modal - Main Functionality
// ============================================
function initDonationModal() {
    console.log('Initializing donation modal...');
    
    // Modal elements
    const donationModal = document.getElementById('donationModal');
    const closeModalBtn = document.getElementById('closeDonationModal');
    const donationBackBtn = document.getElementById('donationBackBtn');
    const closeModalBtnFooter = document.getElementById('closeModalBtn');
    
    // Open modal from any button with data-open-donation="true"
    document.querySelectorAll('[data-open-donation="true"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openDonationModal();
        });
    });
    
    // Close modal functions
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeDonationModal);
    }
    
    if (donationBackBtn) {
        donationBackBtn.addEventListener('click', closeDonationModal);
    }
    
    if (closeModalBtnFooter) {
        closeModalBtnFooter.addEventListener('click', closeDonationModal);
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
    initAmountSelection();
    initOptionPanels();
    initUpiPayment();
    initCopyButtons();
    initNetBankingForm();
}

// Open donation modal
function openDonationModal() {
    const donationModal = document.getElementById('donationModal');
    if (!donationModal) {
        console.error('Donation modal not found');
        return;
    }
    
    donationModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Reset to UPI panel by default
    setTimeout(() => {
        const optUpi = document.getElementById('optUpi');
        if (optUpi) {
            optUpi.click();
            // Set default amount
            setSelectedAmount(501);
        }
    }, 100);
    
    console.log('Donation modal opened');
}

// Close donation modal
function closeDonationModal() {
    const donationModal = document.getElementById('donationModal');
    if (!donationModal) return;
    
    donationModal.style.display = 'none';
    document.body.style.overflow = '';
    
    console.log('Donation modal closed');
}

// ============================================
// 4. Amount Selection
// ============================================
function initAmountSelection() {
    const amountBtns = document.querySelectorAll('.donation-amount-btn');
    const customAmountInput = document.getElementById('donationCustomAmount');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            amountBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Clear custom amount input
            if (customAmountInput) {
                customAmountInput.value = '';
            }
            
            console.log('Selected amount:', this.dataset.amount);
        });
    });
    
    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            const value = parseInt(this.value.replace(/[^0-9]/g, ''));
            if (value > 0) {
                // Remove active class from preset amount buttons
                amountBtns.forEach(b => b.classList.remove('active'));
                console.log('Custom amount:', value);
            }
        });
    }
}

// Set selected amount programmatically
function setSelectedAmount(amount) {
    const amountBtns = document.querySelectorAll('.donation-amount-btn');
    amountBtns.forEach(btn => {
        if (parseInt(btn.dataset.amount) === amount) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Get selected amount
function getSelectedAmount() {
    const activeBtn = document.querySelector('.donation-amount-btn.active');
    if (activeBtn && activeBtn.dataset.amount) {
        return parseInt(activeBtn.dataset.amount);
    }
    
    const customInput = document.getElementById('donationCustomAmount');
    if (customInput && customInput.value) {
        const amount = parseInt(customInput.value.replace(/[^0-9]/g, ''));
        return amount > 0 ? amount : null;
    }
    
    return 501; // Default amount
}

// ============================================
// 5. Option Panels (UPI, Bank, NetBanking)
// ============================================
function initOptionPanels() {
    const optUpi = document.getElementById('optUpi');
    const optBank = document.getElementById('optBank');
    const optNet = document.getElementById('optNet');
    const upiPanel = document.getElementById('upiPanel');
    const bankPanel = document.getElementById('bankPanel');
    const netPanel = document.getElementById('netPanel');
    
    // Function to show selected panel
    function showPanel(panelToShow) {
        // Hide all panels
        if (upiPanel) upiPanel.style.display = 'none';
        if (bankPanel) bankPanel.style.display = 'none';
        if (netPanel) netPanel.style.display = 'none';
        
        // Remove active class from all options
        if (optUpi) optUpi.classList.remove('active');
        if (optBank) optBank.classList.remove('active');
        if (optNet) optNet.classList.remove('active');
        
        // Show selected panel and activate option
        if (panelToShow === 'upi' && upiPanel) {
            upiPanel.style.display = 'block';
            if (optUpi) optUpi.classList.add('active');
        } else if (panelToShow === 'bank' && bankPanel) {
            bankPanel.style.display = 'block';
            if (optBank) optBank.classList.add('active');
        } else if (panelToShow === 'net' && netPanel) {
            netPanel.style.display = 'block';
            if (optNet) optNet.classList.add('active');
            
            // Initialize bank dropdown if not already populated
            populateBankDropdown();
        }
    }
    
    // Add click event listeners
    if (optUpi) {
        optUpi.addEventListener('click', () => showPanel('upi'));
    }
    if (optBank) {
        optBank.addEventListener('click', () => showPanel('bank'));
    }
    if (optNet) {
        optNet.addEventListener('click', () => showPanel('net'));
    }
    
    // Show UPI panel by default
    setTimeout(() => {
        if (optUpi) showPanel('upi');
    }, 100);
}

// ============================================
// 6. UPI Payment Functionality
// ============================================
function initUpiPayment() {
    const payPhonePeBtn = document.getElementById('payPhonePe');
    const payAnyUpiBtn = document.getElementById('payAnyUpi');
    
    // Function to build UPI URL
    function buildUpiUrl(amount) {
        const upiId = 'omsrivenkatamba@upi';
        const payeeName = 'Bhagavathi Sri Venkatamba Temple';
        
        // URL encode parameters
        const params = new URLSearchParams({
            pa: upiId,
            pn: payeeName,
            am: amount.toString(),
            tn: 'Temple Donation',
            cu: 'INR'
        });
        
        return `upi://pay?${params.toString()}`;
    }
    
    // Function to build PhonePe URL
    function buildPhonePeUrl(amount) {
        const upiId = 'omsrivenkatamba@upi';
        const payeeName = 'Bhagavathi Sri Venkatamba Temple';
        
        const params = new URLSearchParams({
            pa: upiId,
            pn: payeeName,
            am: amount.toString(),
            tn: 'Temple Donation',
            cu: 'INR'
        });
        
        return `phonepe://pay?${params.toString()}`;
    }
    
    // Function to show toast message
    function showToast(message) {
        const toast = document.getElementById('donationToast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }
    
    // Check if device is mobile
    function isMobileDevice() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || 
               (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
    }
    
    // PhonePe button click
    if (payPhonePeBtn) {
        payPhonePeBtn.addEventListener('click', function() {
            const amount = getSelectedAmount();
            if (!amount || amount <= 0) {
                showToast('Please select or enter an amount');
                return;
            }
            
            if (!isMobileDevice()) {
                showToast('PhonePe works best on mobile devices. Please scan the QR code.');
                return;
            }
            
            const phonePeUrl = buildPhonePeUrl(amount);
            showToast('Opening PhonePe...');
            
            // Try to open PhonePe
            window.location.href = phonePeUrl;
            
            // Fallback to UPI after 1 second
            setTimeout(() => {
                const upiUrl = buildUpiUrl(amount);
                window.location.href = upiUrl;
            }, 1000);
        });
    }
    
    // Any UPI button click
    if (payAnyUpiBtn) {
        payAnyUpiBtn.addEventListener('click', function() {
            const amount = getSelectedAmount();
            if (!amount || amount <= 0) {
                showToast('Please select or enter an amount');
                return;
            }
            
            if (!isMobileDevice()) {
                showToast('UPI works best on mobile devices. Please scan the QR code.');
                return;
            }
            
            const upiUrl = buildUpiUrl(amount);
            showToast('Opening UPI app...');
            window.location.href = upiUrl;
        });
    }
}

// ============================================
// 7. Copy Buttons Functionality
// ============================================
function initCopyButtons() {
    // Copy UPI ID
    const copyUpiBtn = document.getElementById('copyUpi');
    if (copyUpiBtn) {
        copyUpiBtn.addEventListener('click', function() {
            copyToClipboard('omsrivenkatamba@upi', 'UPI ID copied!');
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
    
    // Helper function to copy to clipboard
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
        }, 2000);
    }
}

// ============================================
// 8. NetBanking Form Functionality
// ============================================
function initNetBankingForm() {
    const bankSelect = document.getElementById('bankSelect');
    const openBankBtn = document.getElementById('openBankNetbanking');
    const markTransferredBtn = document.getElementById('markTransferred');
    const copyReceiptBtn = document.getElementById('copyReceipt');
    const emailReceiptBtn = document.getElementById('emailReceipt');
    const whatsAppReceiptBtn = document.getElementById('whatsAppReceipt');
    
    // Populate bank dropdown
    function populateBankDropdown() {
        if (bankSelect && bankSelect.options.length <= 1) {
            const banks = [
                "State Bank of India (SBI)",
                "HDFC Bank",
                "ICICI Bank", 
                "Axis Bank",
                "Kotak Mahindra Bank",
                "Punjab National Bank (PNB)",
                "Bank of Baroda",
                "Canara Bank",
                "Union Bank of India",
                "Indian Bank",
                "IDBI Bank",
                "Bank of India",
                "Central Bank of India",
                "UCO Bank",
                "Bank of Maharashtra",
                "Indian Overseas Bank",
                "Punjab & Sind Bank",
                "Yes Bank",
                "IndusInd Bank",
                "IDFC FIRST Bank"
            ];
            
            banks.forEach((bank, index) => {
                const option = document.createElement('option');
                option.value = bank.toLowerCase().replace(/\s+/g, '-');
                option.textContent = bank;
                bankSelect.appendChild(option);
            });
        }
    }
    
    // Validate NetBanking form
    function validateNetBankingForm() {
        const donorName = document.getElementById('donorName')?.value.trim();
        const donorPhone = document.getElementById('donorPhone')?.value.trim();
        const donorEmail = document.getElementById('donorEmail')?.value.trim();
        const bankSelected = bankSelect?.value;
        
        const isValid = donorName && donorName.length >= 2 && 
                       donorPhone && donorPhone.length >= 10 && 
                       donorEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail) &&
                       bankSelected;
        
        if (openBankBtn) openBankBtn.disabled = !isValid;
        if (markTransferredBtn) markTransferredBtn.disabled = !isValid;
        
        return isValid;
    }
    
    // Add validation on input
    const formInputs = ['donorName', 'donorPhone', 'donorEmail'];
    formInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', validateNetBankingForm);
        }
    });
    
    if (bankSelect) {
        bankSelect.addEventListener('change', validateNetBankingForm);
    }
    
    // Open NetBanking button
    if (openBankBtn) {
        openBankBtn.addEventListener('click', function() {
            if (this.disabled) return;
            
            const selectedBank = bankSelect.options[bankSelect.selectedIndex].textContent;
            const searchQuery = encodeURIComponent(selectedBank + ' netbanking login');
            window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank', 'noopener,noreferrer');
            
            showToast(`Opening NetBanking for: ${selectedBank}`);
        });
    }
    
    // Mark as transferred button
    if (markTransferredBtn) {
        markTransferredBtn.addEventListener('click', function() {
            if (this.disabled) return;
            
            // Get form values
            const donorName = document.getElementById('donorName').value;
            const donorPhone = document.getElementById('donorPhone').value;
            const donorEmail = document.getElementById('donorEmail').value;
            const donorUTR = document.getElementById('donorUTR').value;
            const selectedBank = bankSelect.options[bankSelect.selectedIndex].textContent;
            const amount = getSelectedAmount() || 'Not specified';
            
            // Generate receipt text
            const receiptText = `
Temple Donation Receipt
========================
Donor Information:
- Name: ${donorName}
- Phone: ${donorPhone}
- Email: ${donorEmail}
- UTR/Reference: ${donorUTR || 'Not provided'}

Transaction Details:
- Amount: ₹${amount}
- Bank: ${selectedBank}
- Mode: NetBanking Transfer
- Date: ${new Date().toLocaleDateString()}
- Time: ${new Date().toLocaleTimeString()}

Temple Bank Details:
- Account Name: Bhagavathi Sri Venkatamba Temple
- Account Number: 6866890630
- IFSC: IDIB000N127
- Bank: Indian Bank, Naidupet Branch
- UPI ID: omsrivenkatamba@upi

Thank you for your generous donation!
This receipt is auto-generated. Please keep for your records.
            `.trim();
            
            // Display receipt
            const receiptBox = document.getElementById('receiptBox');
            const receiptTextarea = document.getElementById('receiptText');
            
            if (receiptBox && receiptTextarea) {
                receiptTextarea.value = receiptText;
                receiptBox.style.display = 'block';
                
                // Scroll to receipt
                receiptBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                showToast('Receipt generated! Copy and send to temple.');
            }
        });
    }
    
    // Copy receipt button
    if (copyReceiptBtn) {
        copyReceiptBtn.addEventListener('click', function() {
            const receiptTextarea = document.getElementById('receiptText');
            if (receiptTextarea && receiptTextarea.value) {
                copyToClipboard(receiptTextarea.value, 'Receipt copied!');
            }
        });
    }
    
    // Email receipt button
    if (emailReceiptBtn) {
        emailReceiptBtn.addEventListener('click', function() {
            const receiptTextarea = document.getElementById('receiptText');
            if (receiptTextarea && receiptTextarea.value) {
                const subject = encodeURIComponent('Temple Donation Receipt');
                const body = encodeURIComponent(receiptTextarea.value);
                const mailtoLink = `mailto:omsrivenkatamba@gmail.com?subject=${subject}&body=${body}`;
                
                // Open in new tab
                window.open(mailtoLink, '_blank', 'noopener,noreferrer');
            }
        });
    }
    
    // WhatsApp receipt button
    if (whatsAppReceiptBtn) {
        whatsAppReceiptBtn.addEventListener('click', function() {
            const receiptTextarea = document.getElementById('receiptText');
            if (receiptTextarea && receiptTextarea.value) {
                const text = encodeURIComponent(receiptTextarea.value);
                const whatsappLink = `https://wa.me/?text=${text}`;
                
                window.open(whatsappLink, '_blank', 'noopener,noreferrer');
            }
        });
    }
    
    // Helper functions
    function copyToClipboard(text, message) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(message);
        });
    }
    
    function showToast(message) {
        const toast = document.getElementById('donationToast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }
}

// ============================================
// 9. Contact Form Functionality
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
        const originalBtnText = submitBtn.innerHTML;
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
                // Success - show message
                const formMessage = document.getElementById('formMessage');
                if (formMessage) {
                    formMessage.style.display = 'block';
                    formMessage.innerHTML = `
                        <div style="padding: 15px; border-radius: 5px; background: #d4edda; color: #155724; border: 1px solid #c3e6cb;">
                            <i class="fas fa-check-circle" style="margin-right: 10px; color: #28a745;"></i>
                            <strong>✅ Message Sent Successfully!</strong><br>
                            Thank you <strong>${name}</strong>! Your message has been sent.
                        </div>
                    `;
                    
                    // Scroll to show message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        this.reset();
                        // Hide message after 5 seconds
                        setTimeout(() => {
                            formMessage.style.display = 'none';
                        }, 5000);
                    }, 3000);
                }
                
                console.log('✅ Form submitted successfully!');
                
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
                        <strong>❌ Error Sending Message!</strong><br>
                        Please try again or contact us directly:<br>
                        📞 +91 8309 545 660<br>
                        ✉️ omsrivenkatamba@gmail.com
                    </div>
                `;
            }
            
            console.error('❌ Form submission error:', error);
            
        } finally {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ============================================
// 10. Smooth Scrolling
// ============================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for actual page sections
            if (href === '#home' || href === '#about' || href === '#services' || 
                href === '#activities' || href === '#committee' || href === '#contact') {
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
// 11. Committee Cards Hover Effect
// ============================================
function initCommitteeCards() {
    document.querySelectorAll('.committee-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
}

// ============================================
// Test Function for Development
// ============================================
function testDonationModal() {
    console.log('Testing donation modal...');
    openDonationModal();
    
    // Test UPI panel
    setTimeout(() => {
        const optUpi = document.getElementById('optUpi');
        if (optUpi) optUpi.click();
        
        // Test amount selection
        setTimeout(() => {
            setSelectedAmount(1001);
            console.log('Test: Amount set to 1001');
        }, 500);
    }, 300);
}

// Export functions for debugging
window.testDonationModal = testDonationModal;
window.openDonationModal = openDonationModal;
window.closeDonationModal = closeDonationModal;
