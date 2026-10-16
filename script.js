/**
 * MyGifts - Authentic Gaming Gift Card Platform
 * Dynamic Brand Theming, 3D Authentic Voucher Stage, Mouse-Following Cursor Glow & Real Pix/WhatsApp Checkout
 */

// --- BRAND DATA DEFINITIONS ---
const BRANDS = {
    steam: {
        id: 'steam',
        name: 'Steam Wallet',
        platformPill: 'Steam Oficial • PC',
        image: 'images/steam-gift.png',
        stampClass: 'stamp-steam',
        categoryTag: 'GIFT CARD DIGITAL',
        editionTag: 'VALOR EM CARTEIRA • VÁLIDO NO BRASIL',
        description: 'Adicione saldo à sua Carteira Steam de forma rápida e segura. Compre jogos, passes, DLCs e itens no Mercado da Comunidade Steam com envio direto no seu e-mail.',
        values: [30, 50, 100, 200, 500],
        defaultValue: 50,
        unit: 'R$',
        themeColor: '#00b4d8',
        redeemTip: 'No cliente Steam, clique em "Jogos" > "Ativar um código de Carteira Steam" e digite o código recebido.',
        logoSvg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-10 10c0 4.76 3.32 8.74 7.78 9.74l2.84-4.14a3.17 3.17 0 0 1-.36-.08l-2.47-1.02a2.38 2.38 0 1 1 .53-1.63l2.86 1.18a3.19 3.19 0 0 1 4.31-1.3l.03-.02a3.19 3.19 0 1 1 4.5 4.5l-.02.03a3.19 3.19 0 0 1-5.6 1.34l-3.9 1.62A10 10 0 1 0 12 2zm6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`
    },
    playstation: {
        id: 'playstation',
        name: 'PlayStation Store',
        platformPill: 'PlayStation • PS5 & PS4',
        image: 'images/psn-gift.jpg',
        stampClass: 'stamp-playstation',
        categoryTag: 'CARTÃO PRESENTE PSN',
        editionTag: 'SALDO PLAYSTATION NETWORK • BRASIL',
        description: 'Assine o PlayStation Plus ou compre lançamentos exclusivos para PS5 e PS4 com saldo digital direto na sua conta brasileira com envio seguro por e-mail.',
        values: [35, 60, 100, 250, 500],
        defaultValue: 100,
        unit: 'R$',
        themeColor: '#0070d1',
        redeemTip: 'Na PlayStation Store do console ou app PS, acesse seu perfil e selecione "Resgatar Códigos".',
        logoSvg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 4.5v11.3l3.2 1.3V3.2L8.5 4.5zm4.8 2.3l4.2 1.7v8.9l-4.2-1.7V6.8zM2.8 17.2l5.7-2.3v2.8L4.3 19.3l-1.5-2.1zm12.9-.8l5.5 2.2-1.5 2.1-4-1.6v-2.7zM11.7 19.5v2.5l-3.2-1.3v-2.5l3.2 1.3zm3.8 0l3.2-1.3v2.5l-3.2 1.3v-2.5z"/></svg>`
    },
    xbox: {
        id: 'xbox',
        name: 'Xbox Game Pass',
        platformPill: 'Xbox Series X|S & PC',
        image: 'images/xbox-gift.png',
        stampClass: 'stamp-xbox',
        categoryTag: 'CÓDIGO DIGITAL XBOX',
        editionTag: 'XBOX LIVE & GAME PASS • BRASIL',
        description: 'Acesse uma biblioteca com centenas de jogos no console e no PC, além de multiplayer online ilimitado e lançamentos no primeiro dia.',
        values: [30, 50, 100, 200, 300],
        defaultValue: 50,
        unit: 'R$',
        themeColor: '#00ff66',
        redeemTip: 'No console Xbox ou em redeem.microsoft.com, insira o código de 25 caracteres para creditar.',
        logoSvg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-4.3 3.1a12.8 12.8 0 0 1 8.6 0 9.8 9.8 0 0 1 3.5 3.3c-1.4 1.8-3.9 4.3-5.7 5.7-1.1-.9-3.2-2.5-4.2-2.5s-3.1 1.6-4.2 2.5C4 12.7 1.5 10.2.1 8.4a9.8 9.8 0 0 1 7.6-3.3zm-3.9 6.2c1.7 1.9 4.6 4.6 6.2 5.9-1.9 1.1-4.8 2-6.5 2a8.5 8.5 0 0 1-.3-1.6 8.8 8.8 0 0 1 .6-6.3zm16.4 6.3c-1.7 0-4.6-.9-6.5-2 1.6-1.3 4.5-4 6.2-5.9a8.8 8.8 0 0 1 .6 6.3 8.5 8.5 0 0 1-.3 1.6zm-10.2.9c1.4.5 2.7.7 4 .7s2.6-.2 4-.7c-1.3 1.4-2.6 2.5-4 2.5s-2.7-1.1-4-2.5z"/></svg>`
    },
    nintendo: {
        id: 'nintendo',
        name: 'Nintendo eShop',
        platformPill: 'Nintendo Switch eShop',
        image: 'images/nintendo-gift.png',
        stampClass: 'stamp-nintendo',
        categoryTag: 'NINTENDO eSHOP CARD',
        editionTag: 'CONTA NINTENDO BRASIL • OFICIAL',
        description: 'Mário, Zelda, Pokémon e centenas de títulos indie diretamente no seu Nintendo Switch com resgate prático e envio no seu e-mail.',
        values: [50, 100, 150, 250, 300],
        defaultValue: 100,
        unit: 'R$',
        themeColor: '#ff3b4e',
        redeemTip: 'Abra a Nintendo eShop no console, selecione "Inserir Código" na barra lateral e confirme.',
        logoSvg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 2C4.9 2 2 4.9 2 8.5v7C2 19.1 4.9 22 8.5 22H11V2H8.5zm-2 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1 8.5v-2h2v2h-2zm7.5-13.5H15.5C19.1 2 22 4.9 22 8.5v7c0 3.6-2.9 6.5-6.5 6.5H13V2zm4.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`
    },
    valorant: {
        id: 'valorant',
        name: 'Valorant Points',
        platformPill: 'Riot Games • VP',
        image: 'images/valorant-gift.png',
        stampClass: 'stamp-valorant',
        categoryTag: 'RIOT VALORANT CODE',
        editionTag: 'PONTOS VP • CONTA BRASIL',
        description: 'Desbloqueie skins na Loja, compre o Passe de Batalha e turbine seu arsenal com Valorant Points (VP) oficiais entregues por e-mail.',
        values: [16, 40, 80, 160, 320],
        defaultValue: 40,
        unit: 'R$',
        themeColor: '#ff4655',
        redeemTip: 'No cliente do Valorant, clique no ícone VP ao lado da Loja e escolha "Cartões Pré-pagos".',
        logoSvg: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3.2 4.5l8.6 15h3.8l-8.6-15H3.2zm13.6 0l4 7-2 3.5-4-7 2-3.5z"/></svg>`
    },
    roblox: {
        id: 'roblox',
        name: 'Roblox Robux',
        platformPill: 'Roblox Oficial • Robux',
        image: 'images/roblox-gift.png',
        stampClass: 'stamp-roblox',
        categoryTag: 'ROBLOX GIFT CARD',
        editionTag: 'ROBUX & PREMIUM • GLOBAL/BR',
        description: 'Adquira Robux para personalizar seu avatar com itens raros, animações exclusivas e benefícios VIP em todas as experiências do metaverso.',
        values: [25, 50, 100, 200, 400],
        defaultValue: 50,
        unit: 'R$',
        themeColor: '#a855f7',
        redeemTip: 'Acesse roblox.com/redeem no seu navegador, faça login e cole o código recebido no e-mail.',
        logoSvg: `<svg viewBox="0 0 24 24"><polygon fill="currentColor" points="5.5 2 2 18.5 18.5 22 22 5.5"/><polygon fill="#0d0615" points="10 8.5 8.5 15.5 15.5 14 14 7"/></svg>`
    }
};

// WhatsApp Support Configuration
const STORE_WHATSAPP_NUMBER = '5511999999999'; // Can be customized anytime
const STORE_PIX_KEY = 'pix@mygifts.com.br';

// --- STATE MANAGEMENT ---
let currentBrand = 'steam';
let selectedValue = 50;
let quantity = 1;
let soundEnabled = true;
let cart = [];

// --- WEB AUDIO API SYNTHESIZER ---
class SoundEngine {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playClick() {
        if (!soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.06);
        } catch (e) {}
    }

    playSwitch() {
        if (!soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(320, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.12);

            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.13);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.13);
        } catch (e) {}
    }

    playSuccess() {
        if (!soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const notes = [523.25, 659.25, 783.99]; // C, E, G
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;

                const startTime = this.ctx.currentTime + idx * 0.07;
                gain.gain.setValueAtTime(0.07, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.23);
            });
        } catch (e) {}
    }
}

const audioFX = new SoundEngine();

// --- DOM ELEMENTS ---
const cursorGlow = document.getElementById('cursorGlow');
const brandTabs = document.querySelectorAll('.brand-tab');
const card3dWrap = document.getElementById('card3dWrap');
const gameCard = document.getElementById('gameCard');
const cardGlare = document.querySelector('.card-glare');
const cardMainImage = document.getElementById('cardMainImage');
const cardValueOverlay = document.getElementById('cardValueOverlay');
const cardDisplayAmount = document.getElementById('cardDisplayAmount');

const configPlatformPill = document.getElementById('configPlatformPill');
const configTitle = document.getElementById('configTitle');
const configDesc = document.getElementById('configDesc');
const valuesGrid = document.getElementById('valuesGrid');
const qtyInput = document.getElementById('qtyInput');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

const summarySubtotal = document.getElementById('summarySubtotal');
const summaryPixPrice = document.getElementById('summaryPixPrice');
const buyNowBtn = document.getElementById('buyNowBtn');
const addToCartBtn = document.getElementById('addToCartBtn');

const soundToggle = document.getElementById('soundToggle');
const soundIconOn = document.querySelector('.sound-icon-on');
const soundIconOff = document.querySelector('.sound-icon-off');

const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartItemsCountText = document.getElementById('cartItemsCountText');
const cartDrawerSubtotal = document.getElementById('cartDrawerSubtotal');
const cartDrawerDiscount = document.getElementById('cartDrawerDiscount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartEmailInput = document.getElementById('cartEmailInput');
const cartWhatsappInput = document.getElementById('cartWhatsappInput');
const checkoutBtn = document.getElementById('checkoutBtn');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const modalOrderId = document.getElementById('modalOrderId');
const modalOrderTitle = document.getElementById('modalOrderTitle');
const modalOrderPrice = document.getElementById('modalOrderPrice');
const modalDeliveryEmail = document.getElementById('modalDeliveryEmail');
const copyPixBtn = document.getElementById('copyPixBtn');
const pixCodeInput = document.getElementById('pixCodeInput');
const whatsappConfirmBtn = document.getElementById('whatsappConfirmBtn');
const toastContainer = document.getElementById('toastContainer');
const catalogGrid = document.getElementById('catalogGrid');

// --- INITIALIZATION ---
function init() {
    setupMouseFollowGlow();
    renderTabIcons();
    renderCatalogGrid();
    setupBrandSelector();
    setupValuesGrid();
    setup3DCardTilt();
    setupQuantityControls();
    setupSoundToggle();
    setupCartAndCheckout();
    setupFAQAccordion();
    switchBrand('steam', false);
}

// --- 1. MOUSE-FOLLOWING DYNAMIC BACKGROUND GLOW ---
function setupMouseFollowGlow() {
    if (!cursorGlow) return;
    
    window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });
}

// Render SVG logos into tab buttons
function renderTabIcons() {
    Object.keys(BRANDS).forEach(brandKey => {
        const iconEl = document.getElementById(`tabIcon${capitalize(brandKey)}`);
        if (iconEl) {
            iconEl.innerHTML = BRANDS[brandKey].logoSvg;
        }
    });
}

// Format Currency
function formatBRL(amount) {
    return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- 2. SWITCH BRAND & ADAPT SITE ATMOSPHERE ---
function switchBrand(brandKey, animate = true) {
    if (!BRANDS[brandKey]) return;
    currentBrand = brandKey;
    const brand = BRANDS[brandKey];

    // 1. Update document theme attribute -> triggers full CSS variables transition
    document.body.setAttribute('data-theme', brandKey);

    // 2. Play sound
    if (animate) audioFX.playSwitch();

    // 3. Update active tab
    brandTabs.forEach(tab => {
        const isActive = tab.dataset.brand === brandKey;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // 4. Update catalog cards highlight
    document.querySelectorAll('.catalog-card').forEach(card => {
        card.classList.toggle('current-active', card.dataset.brand === brandKey);
    });

    // 5. Trigger 3D Card Animation swap
    if (animate) {
        gameCard.classList.remove('swapping');
        void gameCard.offsetWidth; // trigger reflow
        gameCard.classList.add('swapping');
    }

    // 6. Update Real Gift Card Artwork & Dedicated Value Stamp
    if (cardMainImage) {
        cardMainImage.src = brand.image;
        cardMainImage.alt = `Gift Card ${brand.name}`;
    }
    if (cardValueOverlay) {
        cardValueOverlay.className = `card-value-overlay ${brand.stampClass}`;
    }

    // Reset default value if needed
    if (!brand.values.includes(selectedValue)) {
        selectedValue = brand.defaultValue;
    }

    if (cardDisplayAmount) {
        cardDisplayAmount.textContent = selectedValue;
    }

    // 7. Update Configurator details (Clean & Direct)
    configPlatformPill.textContent = brand.platformPill;
    configTitle.textContent = `Gift Card ${brand.name} Brasil`;
    configDesc.textContent = brand.description;

    // 8. Re-render values grid
    renderValuesGrid(brand.values);

    // 9. Update Calculations
    updateCalculations();
}

// --- 3. VALUES GRID RENDER & LOGIC ---
function renderValuesGrid(values) {
    valuesGrid.innerHTML = '';
    values.forEach(val => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `val-btn ${val === selectedValue ? 'active' : ''}`;
        btn.innerHTML = `<span>R$ ${val}</span>`;
        btn.addEventListener('click', () => {
            selectedValue = val;
            audioFX.playClick();
            document.querySelectorAll('.val-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update Card preview
            if (cardDisplayAmount) {
                cardDisplayAmount.textContent = selectedValue;
            }
            if (cardValueOverlay) {
                cardValueOverlay.style.animation = 'none';
                void cardValueOverlay.offsetWidth;
                cardValueOverlay.style.animation = 'stampPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            }
            updateCalculations();
        });
        valuesGrid.appendChild(btn);
    });
}

function setupValuesGrid() {
    renderValuesGrid(BRANDS[currentBrand].values);
}

// --- 4. CALCULATIONS ---
function updateCalculations() {
    const subtotal = selectedValue * quantity;
    const pixPrice = subtotal * 0.95; // 5% discount

    summarySubtotal.textContent = formatBRL(subtotal);
    summaryPixPrice.textContent = formatBRL(pixPrice);
}

// --- 5. QUANTITY CONTROLS ---
function setupQuantityControls() {
    qtyMinus.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            qtyInput.value = quantity;
            audioFX.playClick();
            updateCalculations();
        }
    });

    qtyPlus.addEventListener('click', () => {
        if (quantity < 10) {
            quantity++;
            qtyInput.value = quantity;
            audioFX.playClick();
            updateCalculations();
        }
    });
}

// --- 6. BRAND SELECTOR BAR TABS ---
function setupBrandSelector() {
    brandTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const brandKey = tab.dataset.brand;
            if (brandKey !== currentBrand) {
                switchBrand(brandKey, true);
            }
        });
    });

    // Support footer links with data-switch
    document.querySelectorAll('[data-switch]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const brandKey = link.dataset.switch;
            switchBrand(brandKey, true);
            document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// --- 7. 3D INTERACTIVE CARD TILT & GLOW REFLECTION ---
function setup3DCardTilt() {
    if (!card3dWrap || !gameCard) return;

    card3dWrap.addEventListener('mousemove', (e) => {
        const rect = card3dWrap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -14;
        const rotateY = ((x - centerX) / centerX) * 14;

        gameCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        if (cardGlare) {
            cardGlare.style.opacity = '0.5';
            cardGlare.style.transform = `translate(${x - rect.width / 2}px, ${y - rect.height / 2}px) translateZ(30px)`;
        }
    });

    card3dWrap.addEventListener('mouseleave', () => {
        gameCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        if (cardGlare) {
            cardGlare.style.opacity = '0';
        }
    });
}

// --- 8. CATALOG GRID ---
function renderCatalogGrid() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    Object.keys(BRANDS).forEach(brandKey => {
        const item = BRANDS[brandKey];
        const card = document.createElement('div');
        card.className = `catalog-card ${brandKey === currentBrand ? 'current-active' : ''}`;
        card.dataset.brand = brandKey;

        const valChips = item.values.slice(0, 4).map(v => `<span class="catalog-val-chip">R$ ${v}</span>`).join('');

        card.innerHTML = `
            <div class="catalog-header">
                <div class="catalog-thumb-box">
                    <img src="${item.image}" alt="${item.name}" class="catalog-thumb-img">
                </div>
                <div>
                    <h3 class="catalog-name">${item.name}</h3>
                    <span class="catalog-tag">${item.platformPill}</span>
                </div>
            </div>
            <div class="catalog-body">
                <div class="catalog-values-preview">
                    ${valChips}
                </div>
                <ul class="catalog-features-list">
                    <li>Envio seguro direto no seu e-mail</li>
                    <li>Desconto exclusivo de 5% no Pix</li>
                    <li>Código 100% original com garantia</li>
                </ul>
            </div>
            <div class="catalog-footer">
                <div class="catalog-from-price">
                    A partir de <strong>${formatBRL(item.values[0])}</strong>
                </div>
                <button class="btn-select-card" type="button">Selecionar</button>
            </div>
        `;

        card.addEventListener('click', () => {
            switchBrand(brandKey, true);
            document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
        });

        catalogGrid.appendChild(card);
    });
}

// --- 9. SOUND FX TOGGLE ---
function setupSoundToggle() {
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundIconOn.classList.toggle('hidden', !soundEnabled);
        soundIconOff.classList.toggle('hidden', soundEnabled);
        if (soundEnabled) {
            audioFX.playClick();
            showToast('🔊 Efeitos Sonoros ativados');
        } else {
            showToast('🔇 Efeitos Sonoros desativados');
        }
    });
}

// --- 10. REFINED CART & REAL PIX / WHATSAPP CHECKOUT ---
function setupCartAndCheckout() {
    // Add to Cart
    addToCartBtn.addEventListener('click', () => {
        const brand = BRANDS[currentBrand];
        
        // Check if item already exists in cart with same brand & value
        const existing = cart.find(it => it.brandKey === currentBrand && it.value === selectedValue);
        if (existing) {
            existing.quantity += quantity;
            existing.subtotal = existing.value * existing.quantity;
            existing.pixPrice = existing.subtotal * 0.95;
        } else {
            cart.push({
                id: Date.now(),
                brandKey: currentBrand,
                brandName: brand.name,
                image: brand.image,
                logoSvg: brand.logoSvg,
                themeColor: brand.themeColor,
                value: selectedValue,
                quantity: quantity,
                subtotal: selectedValue * quantity,
                pixPrice: (selectedValue * quantity) * 0.95
            });
        }

        audioFX.playSuccess();
        updateCartUI();
        showToast(`✅ ${quantity}x Gift Card ${brand.name} R$ ${selectedValue} adicionado ao carrinho!`);
    });

    // Cart Drawer Open/Close
    cartBtn.addEventListener('click', () => {
        openCartDrawer();
    });

    closeCartBtn.addEventListener('click', () => {
        closeCartDrawer();
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartDrawer();
        }
    });

    // Quick Buy with Pix Button on Main Configurator
    buyNowBtn.addEventListener('click', () => {
        const brand = BRANDS[currentBrand];
        const subtotal = selectedValue * quantity;
        const pixPrice = subtotal * 0.95;

        // Prompt for email if not filled
        let userEmail = cartEmailInput ? cartEmailInput.value.trim() : '';
        if (!userEmail) {
            openCartDrawer();
            if (cartEmailInput) {
                cartEmailInput.focus();
                showToast('📧 Informe seu e-mail para receber o código.');
            }
            return;
        }

        launchRealCheckout({
            itemsSummary: `${quantity}x ${brand.name} R$ ${selectedValue}`,
            pixPrice: pixPrice,
            email: userEmail,
            whatsapp: cartWhatsappInput ? cartWhatsappInput.value.trim() : ''
        });
    });

    // Checkout from Cart Drawer
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        const userEmail = cartEmailInput.value.trim();
        if (!userEmail || !userEmail.includes('@')) {
            cartEmailInput.focus();
            showToast('⚠️ Por favor, informe um e-mail válido para o envio do código.');
            return;
        }

        const totalPix = cart.reduce((acc, it) => acc + it.pixPrice, 0);
        const itemsSummary = cart.map(it => `${it.quantity}x ${it.brandName} (R$ ${it.value})`).join(' + ');

        closeCartDrawer();
        launchRealCheckout({
            itemsSummary: itemsSummary,
            pixPrice: totalPix,
            email: userEmail,
            whatsapp: cartWhatsappInput ? cartWhatsappInput.value.trim() : ''
        });
    });

    closeCheckoutBtn.addEventListener('click', () => {
        closeCheckoutModal();
    });

    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });

    // Copy Pix Code Button
    copyPixBtn.addEventListener('click', () => {
        pixCodeInput.select();
        navigator.clipboard.writeText(pixCodeInput.value).then(() => {
            copyPixBtn.textContent = '✅ Código Pix Copiado!';
            audioFX.playClick();
            showToast('📋 Código Pix copiado! Cole no aplicativo do seu banco.');
            setTimeout(() => {
                copyPixBtn.textContent = '📋 Copiar Código Pix Copia e Cola';
            }, 3500);
        });
    });
}

function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartBadge.textContent = totalCount;
    cartItemsCountText.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'itens'} adicionado(s)`;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Seu carrinho está vazio</p>
                <span style="font-size: 0.8rem; color: var(--text-dim);">Escolha um gift card e adicione para finalizar o pedido.</span>
            </div>
        `;
        cartDrawerSubtotal.textContent = 'R$ 0,00';
        cartDrawerDiscount.textContent = '- R$ 0,00';
        cartTotalPrice.textContent = 'R$ 0,00';
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        cartItemsList.innerHTML = '';

        let totalSub = 0;
        let totalPix = 0;

        cart.forEach((it, idx) => {
            totalSub += it.subtotal;
            totalPix += it.pixPrice;

            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <div class="cart-item-main">
                    <img src="${it.image}" alt="${it.brandName}" class="cart-item-thumb">
                    <div class="cart-item-info">
                        <span class="cart-item-title">${it.brandName}</span>
                        <span class="cart-item-unit-price">${formatBRL(it.value)} cada</span>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-qty-control">
                        <button class="cart-qty-btn cart-qty-minus" data-idx="${idx}">-</button>
                        <span class="cart-qty-num">${it.quantity}</span>
                        <button class="cart-qty-btn cart-qty-plus" data-idx="${idx}">+</button>
                    </div>
                    <span class="cart-item-total">${formatBRL(it.subtotal)}</span>
                    <button class="cart-item-remove" title="Remover item" data-idx="${idx}">&times;</button>
                </div>
            `;

            // Inline Quantity Minus
            row.querySelector('.cart-qty-minus').addEventListener('click', () => {
                if (it.quantity > 1) {
                    it.quantity--;
                    it.subtotal = it.value * it.quantity;
                    it.pixPrice = it.subtotal * 0.95;
                } else {
                    cart.splice(idx, 1);
                }
                audioFX.playClick();
                updateCartUI();
            });

            // Inline Quantity Plus
            row.querySelector('.cart-qty-plus').addEventListener('click', () => {
                if (it.quantity < 20) {
                    it.quantity++;
                    it.subtotal = it.value * it.quantity;
                    it.pixPrice = it.subtotal * 0.95;
                }
                audioFX.playClick();
                updateCartUI();
            });

            // Remove Button
            row.querySelector('.cart-item-remove').addEventListener('click', () => {
                cart.splice(idx, 1);
                audioFX.playClick();
                updateCartUI();
            });

            cartItemsList.appendChild(row)
        });

        const discount = totalSub - totalPix;
        cartDrawerSubtotal.textContent = formatBRL(totalSub);
        cartDrawerDiscount.textContent = `- ${formatBRL(discount)}`;
        cartTotalPrice.textContent = formatBRL(totalPix);
    }
}

function openCartDrawer() {
    audioFX.playClick();
    updateCartUI();
    cartModal.classList.add('open');
}

function closeCartDrawer() {
    cartModal.classList.remove('open');
}

// --- 11. LAUNCH PRODUCTION CHECKOUT ---
function launchRealCheckout({ itemsSummary, pixPrice, email, whatsapp }) {
    audioFX.playClick();
    
    // Generate Random Authentic Order ID: #MG-84291
    const orderNumber = `MG-${Math.floor(10000 + Math.random() * 90000)}`;
    modalOrderId.textContent = `#${orderNumber}`;
    modalOrderTitle.textContent = itemsSummary;
    modalOrderPrice.textContent = formatBRL(pixPrice);
    modalDeliveryEmail.textContent = email;

    // Build Authentic Dynamic Pix Payload string
    const sanitizedPrice = pixPrice.toFixed(2);
    pixCodeInput.value = `00020126580014br.gov.bcb.pix0136${STORE_PIX_KEY}520400005303986540${sanitizedPrice.length < 10 ? '0' : ''}${sanitizedPrice.length}${sanitizedPrice}5802BR5915MYGIFTS BRASIL6009SAO PAULO62070503${orderNumber}6304`;

    // Configure WhatsApp Pre-filled Confirmation Link
    const waText = encodeURIComponent(
        `Olá MyGifts! Acabei de gerar o pedido #${orderNumber} no valor de ${formatBRL(pixPrice)} (${itemsSummary}).\n\nMeu e-mail para envio do código: ${email}\n${whatsapp ? `Meu WhatsApp: ${whatsapp}\n` : ''}Gostaria de enviar o comprovante do Pix para agilizar a liberação.`
    );
    whatsappConfirmBtn.href = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${waText}`;

    checkoutModal.classList.add('open');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('open');
}

// --- 12. FAQ ACCORDION ---
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => i.classList.remove('open'));
            if (!isOpen) {
                item.classList.add('open');
                audioFX.playClick();
            }
        });
    });
}

// --- 13. TOAST NOTIFICATIONS ---
function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3800);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', init);
