// ────────────────────────────────────────────────
// CONFIG
// ────────────────────────────────────────────────
const TEMPLE_UPI_ID    = 'omsrivenkatamba@upi';
const TEMPLE_PAYEE     = 'Bhagavathi Sri Venkatamba Temple';
const BANK_ACCT        = '6866890630';
const BANK_IFSC        = 'IDIB000N127';

const GITHUB_RAW = 'https://raw.githubusercontent.com/omsrivenkatamba/temple-website/main/images';

// ────────────────────────────────────────────────
// HELPERS
// ────────────────────────────────────────────────
function showToast(msg) {
    alert(msg);
}

function getAmount() {
    const custom = document.getElementById('customAmountInput')?.value.trim();
    if (custom && +custom > 0) return +custom;

    const active = document.querySelector('.donation-amount-btn.active');
    return active ? +(active.dataset.amount || active.textContent.replace(/\D/g,'')) : 0;
}

function buildUpiLink(amount, scheme = 'upi') {
    const params = new URLSearchParams({
        pa: TEMPLE_UPI_ID,
        pn: TEMPLE_PAYEE,
        am: amount,
        cu: 'INR',
        tn: 'Temple Donation'
    });
    return `${scheme}://pay?${params}`;
}

// ────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Hero Slider
    const slider = document.getElementById('mainSlider');
    if (slider) {
        const slides = [
            '01-main-slide/01-main-slide1.jpg',
            '01-main-slide/01-main-slide2.jpg',
            '01-main-slide/01-main-slide3.jpg'
            // Add more filenames here when you upload them
        ];
        slider.innerHTML = slides.map((path, i) =>
            `<div class="slide ${i===0?'active':''}" style="background-image:url('${GITHUB_RAW}/${path}')"></div>`
        ).join('');

        setInterval(() => {
            const els = slider.querySelectorAll('.slide');
            els.forEach(el => el.classList.remove('active'));
            const idx = (Array.from(els).findIndex(el => el.classList.contains('active')) + 1) % els.length;
            els[idx].classList.add('active');
        }, 5500);
    }

    // Home welcome section
    document.getElementById('homeContent')?.innerHTML = `
        <div style="text-align:center; padding:60px 20px;">
            <h1 style="color:#c62828; margin-bottom:20px;">Welcome to Sri Venkatamba Temple</h1>
            <div style="font-size:1.4rem; line-height:1.8; max-width:700px; margin:0 auto 40px;">
                శ్రీ వేంకటాంబ! శ్రీ వేంకటాంబ!<br>
                సంకటహరాంబ! శ్రీ వేంకటాంబ!
            </div>
            <button class="donate-btn" id="homeDonateBtn">Donate Now</button>
        </div>
    `;

    // Modal open / close
    const modal = document.getElementById('donationModal');
    [document.getElementById('donateBtn'), document.getElementById('homeDonateBtn')]
        .forEach(btn => btn?.addEventListener('click', () => modal.style.display = 'flex'));

    document.getElementById('closeDonationModal')?.addEventListener('click', () => modal.style.display = 'none');
    modal?.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    // Amount selection logic
    document.querySelectorAll('.donation-amount-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.donation-amount-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const custom = document.getElementById('customAmountInput');
            if (custom) custom.value = '';
        });
    });

    document.getElementById('customAmountInput')?.addEventListener('input', () => {
        document.querySelectorAll('.donation-amount-btn').forEach(b => b.classList.remove('active'));
    });

    // Tab switching (UPI / Bank / Net)
    const tabs = {
        upi:  document.getElementById('optUpi'),
        bank: document.getElementById('optBank'),
        net:  document.getElementById('optNet')
    };
    const panels = {
        upi:  document.getElementById('upiPanel'),
        bank: document.getElementById('bankPanel'),
        net:  document.getElementById('netPanel')
    };

    Object.keys(tabs).forEach(key => {
        tabs[key]?.addEventListener('click', () => {
            Object.values(tabs).forEach(t => t?.classList.remove('active'));
            Object.values(panels).forEach(p => p && (p.style.display = 'none'));
            tabs[key].classList.add('active');
            panels[key] && (panels[key].style.display = 'block');
        });
    });

    // Open UPI tab by default
    tabs.upi?.click();

    // UPI payment buttons
    document.getElementById('payPhonePe')?.addEventListener('click', () => {
        const amt = getAmount();
        if (!amt) return showToast('Please select or enter amount');
        window.location = buildUpiLink(amt, 'phonepe');
    });

    document.getElementById('payAnyUpi')?.addEventListener('click', () => {
        const amt = getAmount();
        if (!amt) return showToast('Please select or enter amount');
        window.location = buildUpiLink(amt);
    });

    // Copy bank details
    document.getElementById('copyAccount')?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(BANK_ACCT);
            showToast('Account number copied');
        } catch {
            showToast('Copy failed – please copy manually');
        }
    });

    document.getElementById('copyIfsc')?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(BANK_IFSC);
            showToast('IFSC copied');
        } catch {
            showToast('Copy failed – please copy manually');
        }
    });

    // Netbanking receipt generator
    document.getElementById('generateReceipt')?.addEventListener('click', () => {
        const amt = getAmount();
        if (!amt) return showToast('Please select or enter amount');

        const receipt = [
            'Donation Receipt – Bhagavathi Sri Venkatamba Temple',
            `Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
            `Amount: ₹${amt}`,
            '',
            'Beneficiary Details:',
            'Account Name   : Bhagavathi Sri Venkatamba Temple',
            `Account Number : ${BANK_ACCT}`,
            `IFSC Code      : ${BANK_IFSC}`,
            'Bank & Branch  : Indian Bank, Naidupet Branch'
        ].join('\n');

        const box = document.getElementById('receiptBox');
        const ta  = document.getElementById('receiptText');
        if (box && ta) {
            ta.value = receipt;
            box.style.display = 'block';
            box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        document.getElementById('copyReceipt')?.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(receipt);
                showToast('Receipt copied');
            } catch {}
        });

        const wa = document.getElementById('whatsAppReceipt');
        if (wa) wa.href = `https://wa.me/?text=${encodeURIComponent(receipt)}`;

        const email = document.getElementById('emailReceipt');
        if (email) email.href = `mailto:omsrivenkatamba@gmail.com?subject=Donation%20Receipt&body=${encodeURIComponent(receipt)}`;
    });
});
