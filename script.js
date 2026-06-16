// ── Product Data ──────────────────────────────────────────────
const wardrobes = [
  {
    id: 'w1', category: 'Wardrobe',
    name: 'Imperial Sliding Wardrobe',
    desc: 'Floor-to-ceiling 3-door sliding wardrobe in dark walnut veneer. Internal LED lighting, 4 hanging rails, 6 shelves, and 2 drawers.',
    price: 3200, oldPrice: 3900, badge: 'Best Seller',
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="170" rx="6" fill="#1e3d2f"/>
      <rect x="10" y="20" width="200" height="170" rx="6" stroke="#c9a84c" stroke-width="1.5"/>
      <line x1="76" y1="20" x2="76" y2="190" stroke="#c9a84c" stroke-width="1"/>
      <line x1="144" y1="20" x2="144" y2="190" stroke="#c9a84c" stroke-width="1"/>
      <rect x="68" y="100" width="16" height="5" rx="2.5" fill="#c9a84c"/>
      <rect x="136" y="100" width="16" height="5" rx="2.5" fill="#c9a84c"/>
      <rect x="16" y="26" width="54" height="158" rx="3" fill="rgba(201,168,76,0.04)"/>
      <rect x="82" y="26" width="54" height="158" rx="3" fill="rgba(201,168,76,0.04)"/>
      <rect x="150" y="26" width="54" height="158" rx="3" fill="rgba(201,168,76,0.04)"/>
      <rect x="20" y="60" width="46" height="1" fill="rgba(201,168,76,0.3)"/>
      <rect x="20" y="100" width="46" height="1" fill="rgba(201,168,76,0.3)"/>
      <rect x="86" y="70" width="46" height="1" fill="rgba(201,168,76,0.3)"/>
      <rect x="154" y="60" width="46" height="1" fill="rgba(201,168,76,0.3)"/>
      <rect x="154" y="100" width="46" height="1" fill="rgba(201,168,76,0.3)"/>
    </svg>`
  },
  {
    id: 'w2', category: 'Wardrobe',
    name: 'Heritage Hinged Wardrobe',
    desc: 'Classic 4-door wardrobe in solid oak with brass handles. Double hanging space with pull-out trouser rack and shoe shelf.',
    price: 2750, oldPrice: null, badge: null,
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="170" rx="6" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1.5"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="#c9a84c" stroke-width="1"/>
      <line x1="110" y1="20" x2="110" y2="190" stroke="#c9a84c" stroke-width="1"/>
      <line x1="160" y1="20" x2="160" y2="190" stroke="#c9a84c" stroke-width="1"/>
      <!-- Brass handles -->
      <circle cx="55" cy="105" r="4" fill="#c9a84c"/>
      <circle cx="105" cy="105" r="4" fill="#c9a84c"/>
      <circle cx="155" cy="105" r="4" fill="#c9a84c"/>
      <circle cx="205" cy="105" r="4" fill="#c9a84c" opacity=".4"/>
      <!-- Panel details -->
      <rect x="18" y="30" width="34" height="60" rx="2" fill="none" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
      <rect x="18" y="100" width="34" height="80" rx="2" fill="none" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
      <rect x="68" y="30" width="34" height="60" rx="2" fill="none" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
      <rect x="68" y="100" width="34" height="80" rx="2" fill="none" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
    </svg>`
  },
  {
    id: 'w3', category: 'Wardrobe',
    name: 'Obsidian Walk-In Unit',
    desc: 'Modular walk-in wardrobe system in matte black with gold accents. Fully customisable configuration. Price per linear metre.',
    price: 1800, oldPrice: null, badge: 'Custom',
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="90" height="175" rx="4" fill="#0e0e0e" stroke="#c9a84c" stroke-width="1.2"/>
      <rect x="110" y="15" width="100" height="80" rx="4" fill="#0e0e0e" stroke="#c9a84c" stroke-width="1.2"/>
      <rect x="110" y="110" width="100" height="80" rx="4" fill="#0e0e0e" stroke="#c9a84c" stroke-width="1.2"/>
      <!-- Hanging rail -->
      <line x1="20" y1="55" x2="90" y2="55" stroke="#c9a84c" stroke-width="2"/>
      <!-- Hangers -->
      <path d="M35 55 Q35 45 45 45 Q55 45 55 55" stroke="#c9a84c" stroke-width="1" fill="none"/>
      <path d="M60 55 Q60 45 70 45 Q80 45 80 55" stroke="#c9a84c" stroke-width="1" fill="none"/>
      <!-- Shelves -->
      <rect x="18" y="90" width="74" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="18" y="120" width="74" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="18" y="150" width="74" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="118" y="50" width="84" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="118" y="155" width="84" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="118" y="170" width="84" height="2" fill="#c9a84c" opacity=".5"/>
      <rect x="153" y="110" width="2" height="80" fill="#c9a84c" opacity=".3"/>
    </svg>`
  }
];

const vanities = [
  {
    id: 'v1', category: 'Vanity',
    name: 'Royal Dressing Table',
    desc: 'Trifold mirror vanity in champagne finish with integrated LED surround. 6 drawers, velvet-lined jewellery tray, and padded stool included.',
    price: 1450, oldPrice: 1800, badge: 'Includes Stool',
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Mirror trifold -->
      <rect x="55" y="10" width="110" height="90" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1.2"/>
      <line x1="88" y1="10" x2="88" y2="100" stroke="#c9a84c" stroke-width="1"/>
      <line x1="132" y1="10" x2="132" y2="100" stroke="#c9a84c" stroke-width="1"/>
      <!-- LED halo -->
      <rect x="57" y="12" width="106" height="86" rx="3" fill="none" stroke="rgba(201,168,76,0.4)" stroke-width="1"/>
      <!-- Table surface -->
      <rect x="20" y="100" width="180" height="12" rx="4" fill="#c9a84c" opacity=".7"/>
      <!-- Drawers -->
      <rect x="22" y="114" width="80" height="55" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <rect x="118" y="114" width="80" height="55" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <line x1="22" y1="141" x2="102" y2="141" stroke="#c9a84c" stroke-width=".8" opacity=".5"/>
      <line x1="118" y1="141" x2="198" y2="141" stroke="#c9a84c" stroke-width=".8" opacity=".5"/>
      <!-- Handles -->
      <rect x="57" y="126" width="12" height="3" rx="1.5" fill="#c9a84c"/>
      <rect x="57" y="153" width="12" height="3" rx="1.5" fill="#c9a84c"/>
      <rect x="153" y="126" width="12" height="3" rx="1.5" fill="#c9a84c"/>
      <rect x="153" y="153" width="12" height="3" rx="1.5" fill="#c9a84c"/>
      <!-- Legs -->
      <rect x="28" y="169" width="10" height="22" rx="3" fill="#c9a84c" opacity=".6"/>
      <rect x="182" y="169" width="10" height="22" rx="3" fill="#c9a84c" opacity=".6"/>
    </svg>`
  },
  {
    id: 'v2', category: 'Vanity',
    name: 'Minimalist Arch Mirror Vanity',
    desc: 'Sleek single-arch mirror with hairpin legs in brushed gold. Floating shelf with 3 drawers in light ash veneer.',
    price: 890, oldPrice: null, badge: null,
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Arch mirror -->
      <path d="M75 100 L75 30 Q75 10 110 10 Q145 10 145 30 L145 100 Z" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1.5"/>
      <path d="M82 100 L82 34 Q82 20 110 20 Q138 20 138 34 L138 100 Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" stroke-width=".8"/>
      <!-- Table -->
      <rect x="25" y="100" width="170" height="10" rx="3" fill="#c9a84c" opacity=".6"/>
      <!-- Drawer -->
      <rect x="60" y="112" width="100" height="40" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <line x1="60" y1="132" x2="160" y2="132" stroke="#c9a84c" stroke-width=".7" opacity=".4"/>
      <rect x="105" y="120" width="10" height="3" rx="1.5" fill="#c9a84c"/>
      <rect x="105" y="141" width="10" height="3" rx="1.5" fill="#c9a84c"/>
      <!-- Hairpin legs -->
      <path d="M40 110 L35 175 M40 110 L45 175" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M180 110 L175 175 M180 110 L185 175" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'v3', category: 'Vanity',
    name: 'Gatsby Hollywood Vanity',
    desc: 'Statement Hollywood-style vanity with 14-bulb mirror surround. Deep mahogany finish with velvet stool and 8-drawer base unit.',
    price: 2100, oldPrice: 2500, badge: 'Luxury',
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Large mirror with bulbs -->
      <rect x="40" y="8" width="140" height="95" rx="6" fill="#0e0e0e" stroke="#c9a84c" stroke-width="1.5"/>
      <!-- Bulbs top -->
      <circle cx="60" cy="12" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="80" cy="10" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="100" cy="9" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="120" cy="9" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="140" cy="10" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="160" cy="12" r="4" fill="#c9a84c" opacity=".9"/>
      <!-- Bulbs sides -->
      <circle cx="41" cy="35" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="179" cy="35" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="41" cy="60" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="179" cy="60" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="41" cy="85" r="4" fill="#c9a84c" opacity=".9"/>
      <circle cx="179" cy="85" r="4" fill="#c9a84c" opacity=".9"/>
      <!-- Inner mirror -->
      <rect x="52" y="18" width="116" height="78" rx="3" fill="#1e3d2f"/>
      <!-- Table -->
      <rect x="20" y="103" width="180" height="10" rx="3" fill="#c9a84c" opacity=".5"/>
      <!-- Drawer unit -->
      <rect x="20" y="115" width="180" height="60" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <line x1="20" y1="145" x2="200" y2="145" stroke="#c9a84c" stroke-width=".8" opacity=".4"/>
      <line x1="110" y1="115" x2="110" y2="175" stroke="#c9a84c" stroke-width=".8" opacity=".4"/>
      <rect x="100" y="128" width="20" height="3" rx="1.5" fill="#c9a84c"/>
      <rect x="100" y="158" width="20" height="3" rx="1.5" fill="#c9a84c"/>
      <!-- Feet -->
      <rect x="28" y="175" width="12" height="18" rx="3" fill="#c9a84c" opacity=".5"/>
      <rect x="180" y="175" width="12" height="18" rx="3" fill="#c9a84c" opacity=".5"/>
    </svg>`
  }
];

const beds = [
  {
    id: 'b1', category: 'Bed',
    name: 'Sovereign Panel Bed',
    desc: 'King-size upholstered bed with deep-buttoned velvet headboard in forest green. Solid oak slat base, optional under-bed drawers.',
    price: 2400, oldPrice: 2900, badge: 'Best Seller',
    svg: `<svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Headboard -->
      <rect x="15" y="20" width="190" height="70" rx="8" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1.2"/>
      <!-- Button tufting -->
      <circle cx="55" cy="45" r="4" fill="#c9a84c" opacity=".5"/>
      <circle cx="110" cy="45" r="4" fill="#c9a84c" opacity=".5"/>
      <circle cx="165" cy="45" r="4" fill="#c9a84c" opacity=".5"/>
      <circle cx="55" cy="72" r="4" fill="#c9a84c" opacity=".5"/>
      <circle cx="110" cy="72" r="4" fill="#c9a84c" opacity=".5"/>
      <circle cx="165" cy="72" r="4" fill="#c9a84c" opacity=".5"/>
      <!-- Tufting lines -->
      <line x1="55" y1="45" x2="110" y2="45" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <line x1="110" y1="45" x2="165" y2="45" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <line x1="55" y1="72" x2="110" y2="72" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <line x1="55" y1="45" x2="55" y2="72" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <line x1="110" y1="45" x2="110" y2="72" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <line x1="165" y1="45" x2="165" y2="72" stroke="rgba(201,168,76,0.15)" stroke-width=".8"/>
      <!-- Mattress base -->
      <rect x="10" y="90" width="200" height="55" rx="6" fill="#2a5540" stroke="#c9a84c" stroke-width="1"/>
      <!-- Pillows -->
      <rect x="22" y="95" width="78" height="32" rx="8" fill="#c9a84c" opacity=".25" stroke="#c9a84c" stroke-width=".8"/>
      <rect x="120" y="95" width="78" height="32" rx="8" fill="#c9a84c" opacity=".25" stroke="#c9a84c" stroke-width=".8"/>
      <!-- Legs -->
      <rect x="18" y="145" width="12" height="26" rx="3" fill="#c9a84c" opacity=".6"/>
      <rect x="190" y="145" width="12" height="26" rx="3" fill="#c9a84c" opacity=".6"/>
    </svg>`
  },
  {
    id: 'b2', category: 'Bed',
    name: 'Nordic Platform Bed',
    desc: 'Low-profile queen-size platform bed in natural solid ash. No box spring needed. Floating aesthetic with integrated base lighting.',
    price: 1750, oldPrice: null, badge: null,
    svg: `<svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Low headboard -->
      <rect x="15" y="45" width="190" height="40" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <rect x="22" y="52" width="176" height="26" rx="3" fill="rgba(201,168,76,0.06)"/>
      <!-- Platform base -->
      <rect x="5" y="85" width="210" height="60" rx="4" fill="#2a5540" stroke="#c9a84c" stroke-width="1"/>
      <!-- Floating gap (light) -->
      <rect x="10" y="142" width="200" height="4" rx="2" fill="#c9a84c" opacity=".2"/>
      <!-- Slat detail -->
      <line x1="40" y1="85" x2="40" y2="145" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
      <line x1="80" y1="85" x2="80" y2="145" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
      <line x1="120" y1="85" x2="120" y2="145" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
      <line x1="160" y1="85" x2="160" y2="145" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
      <!-- Pillows -->
      <rect x="20" y="90" width="80" height="28" rx="6" fill="#c9a84c" opacity=".2" stroke="#c9a84c" stroke-width=".8"/>
      <rect x="118" y="90" width="80" height="28" rx="6" fill="#c9a84c" opacity=".2" stroke="#c9a84c" stroke-width=".8"/>
      <!-- Base (no legs — floating) -->
      <rect x="5" y="146" width="210" height="6" rx="3" fill="#c9a84c" opacity=".3"/>
    </svg>`
  },
  {
    id: 'b3', category: 'Bed',
    name: 'Canopy Four-Poster Bed',
    desc: 'Dramatic king-size four-poster in solid black walnut with gold-tipped finials. Includes premium slatted base. Drapes optional.',
    price: 4200, oldPrice: 5000, badge: 'Luxury',
    svg: `<svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Four posts -->
      <rect x="15" y="10" width="10" height="180" rx="3" fill="#1a1a1a" stroke="#c9a84c" stroke-width=".8"/>
      <rect x="195" y="10" width="10" height="180" rx="3" fill="#1a1a1a" stroke="#c9a84c" stroke-width=".8"/>
      <!-- Finials -->
      <circle cx="20" cy="10" r="6" fill="#c9a84c"/>
      <circle cx="200" cy="10" r="6" fill="#c9a84c"/>
      <!-- Top rail -->
      <rect x="15" y="14" width="190" height="5" rx="2" fill="#c9a84c" opacity=".5"/>
      <!-- Canopy drape suggestion -->
      <path d="M25 19 Q50 40 110 35 Q170 30 195 19" stroke="#c9a84c" stroke-width=".8" fill="rgba(201,168,76,0.05)" opacity=".7"/>
      <!-- Headboard -->
      <rect x="20" y="50" width="180" height="50" rx="5" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
      <rect x="28" y="58" width="164" height="34" rx="3" fill="rgba(201,168,76,0.06)"/>
      <!-- Mattress -->
      <rect x="18" y="100" width="184" height="60" rx="5" fill="#2a5540" stroke="#c9a84c" stroke-width="1"/>
      <!-- Pillows -->
      <rect x="28" y="106" width="72" height="26" rx="6" fill="#c9a84c" opacity=".22" stroke="#c9a84c" stroke-width=".8"/>
      <rect x="120" y="106" width="72" height="26" rx="6" fill="#c9a84c" opacity=".22" stroke="#c9a84c" stroke-width=".8"/>
      <!-- Footboard -->
      <rect x="20" y="160" width="180" height="22" rx="4" fill="#1e3d2f" stroke="#c9a84c" stroke-width="1"/>
    </svg>`
  }
];

// ── State ──────────────────────────────────────────────────────
let cart = [];
let currentProduct = null;
let qty = 1;

// ── Render Grids ───────────────────────────────────────────────
function renderGrid(items, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(p => `
    <div class="product-card reveal" onclick="openModal('${p.id}')">
      ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
      <div class="product-card__img">${p.svg}</div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__footer">
          <div class="product-card__price">
            $${p.price.toLocaleString()}
            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="quick-view">Quick View</button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ── Modal ──────────────────────────────────────────────────────
const allProducts = [...wardrobes, ...vanities, ...beds];

function openModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  qty = 1;
  document.getElementById('modalImg').innerHTML = p.svg;
  document.getElementById('modalCat').textContent = p.category;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent =
    `$${p.price.toLocaleString()}${p.oldPrice ? ` · was $${p.oldPrice.toLocaleString()}` : ''}`;
  document.getElementById('qtyValue').textContent = qty;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

document.getElementById('qtyMinus').addEventListener('click', () => {
  if (qty > 1) { qty--; document.getElementById('qtyValue').textContent = qty; }
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  qty++;
  document.getElementById('qtyValue').textContent = qty;
});

document.getElementById('modalAdd').addEventListener('click', () => {
  if (!currentProduct) return;
  addToCart(currentProduct, qty);
  closeModal();
});

// ── Cart ───────────────────────────────────────────────────────
function addToCart(product, quantity = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ ...product, qty: quantity });
  }
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `$${total.toLocaleString()}`;

  const itemsEl = document.getElementById('cartItems');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div>
          <p class="cart-item__name">${i.name}</p>
          <p class="cart-item__qty">Qty: ${i.qty}</p>
        </div>
        <span class="cart-item__price">$${(i.price * i.qty).toLocaleString()}</span>
        <button class="cart-item__remove" onclick="removeFromCart('${i.id}')" title="Remove">✕</button>
      </div>
    `).join('');
  }
}

// Cart open/close
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Navbar scroll effect ───────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

// ── Reveal on scroll ───────────────────────────────────────────
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

// ── Animated counters ──────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.count').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + (el.dataset.target === '100' ? '' : '+');
      if (current >= target) clearInterval(timer);
    }, 24);
  });
}

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    statsObserver.disconnect();
  }
}, { threshold: 0.5 });
const statsEl = document.querySelector('.stats-bar');
if (statsEl) statsObserver.observe(statsEl);

// ── Contact form ───────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formSuccess').classList.add('visible');
  e.target.reset();
  setTimeout(() => document.getElementById('formSuccess').classList.remove('visible'), 5000);
});

// ── Toast ──────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Keyboard nav ───────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ── Init ───────────────────────────────────────────────────────
renderGrid(wardrobes, 'wardrobe-grid');
renderGrid(vanities, 'vanity-grid');
renderGrid(beds, 'bed-grid');
observeReveal();
